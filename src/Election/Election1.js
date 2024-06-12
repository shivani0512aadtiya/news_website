import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../Admineditor.js/AuthProvider';
import Addelection from './Addelection';

function Election1() {
  const { isAuthenticated, token } = useAuth();
  const [election, setElection] = useState([]);
  const [expandedItems, setExpandedItems] = useState({});

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get('https://news-dyf7.onrender.com/getelection');
        console.log('response', response.data);

        if (response.data && Array.isArray(response.data.file)) {
            setElection(response.data.file);
        } else {
          console.error('Expected an array but got:', response.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  const handleAddelection = (card) => {
    setElection((prevelection) => [...prevelection, card]);
  };

  const truncateDescription = (description, wordLimit) => {
    const words = description.split(' ');
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(' ') + '...';
    }
    return description;
  };

  const deleteCard = async (_id) => {
    if (!_id) {
      console.error('Delete request failed: id is undefined');
      return;
    }

    try {
      await axios.delete(`https://news-dyf7.onrender.com/deleteelection/${_id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setElection((prevelection) => prevelection.filter((card) => card._id !== _id));
    } catch (error) {
      console.log('AxiosError', error);
    }
  };

  const toggleReadMore = (_id) => {
    setExpandedItems((prev) => ({
      ...prev,
      [_id]: !prev[_id],
    }));
  };

  return (
    <div className="flex justify-center space-x-4">
    {isAuthenticated && <Addelection onAddeducation={handleAddelection} />}
  <div className="flex flex-row items-center justify-center">
    {Array.isArray(election) && election.length > 0 ? (
      <div className="m-4 p-4 border rounded-lg justify-center space-y-4 shadow-lg w-2/4">
        {election.map((item, index) => (
          <div key={item._id} className="mb-4">
            <img
              src={item.file.url}
              alt={item.url}
              className="block w-80 h-auto object-cover rounded mb-2"
              loading="lazy"
            />
           <span className="block font-semibold text-lg">{item.headline}</span>
              <span className="block text-gray-700">
                {expandedItems[item._id]
                  ? item.description
                  : truncateDescription(item.description, 50)}
                <button
                  className="text-blue-500 ml-2"
                  onClick={() => toggleReadMore(item._id)}
                >
                  {expandedItems[item._id] ? 'Read Less' : 'Read More'}
                </button>
              </span>
            {isAuthenticated && (
              <button
                className="h-8 w-20 bg-red-500 mt-2"
                onClick={() => {
                  console.log('Attempting to delete card with id:', item._id);
                  deleteCard(item._id);
                }}
              >
                Delete
              </button>
            )}
            {index < election.length - 1 && <hr className="my-4" />}
          </div>
        ))}
      </div>
    ) : (
      <p>No cards available</p>
    )}
  </div>
</div>

  );
}

export default Election1;