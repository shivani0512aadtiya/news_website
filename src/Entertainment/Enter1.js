import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useAuth } from '../Admineditor.js/AuthProvider';
import Addenter1 from './Addenter1';

const Enter1 = () => {
  const [enter, setEnter] = useState([]);
  const [error, setError] = useState('');
  const { isAuthenticated, token } = useAuth();
  const [expandedDescriptionIndex, setExpandedDescriptionIndex] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get("https://news-dyf7.onrender.com/get");
        console.log("response", response.data);

        if (response.data && Array.isArray(response.data.file)) {
          setEnter(response.data.file);
        } else {
          console.log('Expected an array but got:', response.data);
          setError('Invalid Data Structure');
        }
      } catch (error) {
        console.error("Failed to fetch news", error);
        setError('Failed to fetch news');
      }
    };
    getData();
  }, []);

  const truncateDescription = (description, wordLimit) => {
    const words = description.split(' ');
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(' ') + '...';
    }
    return description;
  };

  const handleAddenter = (news) => {
    setEnter(preventer => [...preventer, news]);
  };

  const deleteCard = async (_id) => {
    if (!_id) {
      console.error('Delete request failed: id is undefined');
      return;
    }

    try {
      const response = await axios.delete(`https://news-dyf7.onrender.com/delete/${_id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      console.log('Delete response:', response.data); 
      setEnter(preventer => preventer.filter(news => news._id !== _id));
    } catch (error) {
      console.log('AxiosError', error);
      console.log('Error response data:', error.response?.data);
    }
  };

  const handleReadMore = (index) => {
    setExpandedDescriptionIndex(prevIndex => (prevIndex === index ? null : index));
  };

  return (
  <div className="flex flex-wrap justify-center">
    {isAuthenticated && <Addenter1 onAddnews={handleAddenter} />}
  {Array.isArray(enter) && enter.length > 0 ? (
    enter.map((item, index) => (
      <div
        key={index}
        className="m-4 p-4 border rounded-lg shadow-lg"
        style={{ maxWidth: '500px', width: '100%', height: 'auto' }}
      >
        <img
          src={item.file?.url || 'https://via.placeholder.com/150'}
          alt={item.headline}
          className="w-full h-48 object-cover rounded-t-lg"
          style={{ maxWidth: '100%', height: '50%', objectFit: 'cover' }}
        />
        <div className="p-2">
          <h2 className="text-xl font-semibold">{item.headline}</h2>
          <p className="text-gray-700">
            {expandedDescriptionIndex === index
              ? item.description
              : truncateDescription(item.description, 50)}
          </p>
          <button
            onClick={() => handleReadMore(index)}
            className="text-blue-500 hover:underline"
          >
            {expandedDescriptionIndex === index ? 'Read less' : 'Read more'}
          </button>
        </div>

        {isAuthenticated && (
          <button
            className="h-8 w-36 bg-red-500 mt-2"
            onClick={() => deleteCard(item._id)}
          >
            Delete
          </button>
        )}
      </div>
    ))
  ) : (
    <p>{error || 'No cards available'}</p>
  )}
  
</div>
  );
}

export default Enter1;