import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Addtech from './Addtech';
import { useAuth } from '../Admineditor.js/AuthProvider';

function Tech1() {
  const { isAuthenticated, token } = useAuth();
  const [technology, setTechnology] = useState([]);
  const [expandedItems, setExpandedItems] = useState({});

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get('https://news-dyf7.onrender.com/gettechnology');
        console.log('response', response.data);

        if (response.data && Array.isArray(response.data.file)) {
          setTechnology(response.data.file);
        } else {
          console.error('Expected an array but got:', response.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  const handleAddtechnology = (newCard) => {
    setTechnology((prevTechnology) => [...prevTechnology, newCard]);
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
      await axios.delete(`https://news-dyf7.onrender.com/deletetechnology/${_id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setTechnology((prevTechnology) => prevTechnology.filter((card) => card._id !== _id));
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
      {isAuthenticated && <Addtech onAddCard={handleAddtechnology} />}
    <div className="flex flex-row items-center">
      {Array.isArray(technology) && technology.length > 0 ? (
        <div className="m-4 p-4 border rounded-lg w-full">
          {technology.map((item, index) => (
            <div key={item._id} className="mb-4">
              <img
                src={item.file.url}
                alt={item.url}
                className="block w-80 h-auto object-cover rounded mb-2"
                loading="lazy"
              />
              <span className="block font-semibold">{item.headline}</span>
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
              {index < technology.length - 1 && <hr className="my-4" />}
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

export default Tech1;
