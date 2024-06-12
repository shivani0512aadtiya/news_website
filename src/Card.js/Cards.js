import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../Admineditor.js/AuthProvider';
import Addcard from '../Card.js/Addcard';

const Cards = () => {
  const { isAuthenticated, token } = useAuth();
  const [cards, setCards] = useState([]);
  const navigate = useNavigate()

   const navigation = (id) => {
    navigate(`/card/${id}`);
    console.log(`id is ${id}`)
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get("https://news-dyf7.onrender.com/getcard");
        console.log("response", response.data);

        if (response.data && Array.isArray(response.data.photos)) {
          setCards(response.data.photos);
        } else {
          console.error('Expected an array but got:', response.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  const handleAddCard = (newCard) => {
    setCards(prevCards => [...prevCards, newCard]);
  };

  const truncateDescription = (description, wordLimit) => {
    const words = description.split(' ');
    if (words.length > 50) {
      return words.slice(0, 50).join(' ') + '...';
    }
    return description;
  };

  const deleteCard = async (_id) => {
    if (!_id) {
      console.error('Delete request failed: id is undefined');
      return;
    }

    try {
      await axios.delete(`https://news-dyf7.onrender.com/deletecard/${_id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setCards(prevCards => prevCards.filter(card => card._id !== _id));
    } catch (error) {
      console.log('AxiosError', error);
    }
  };
  return (
    <div>
      {isAuthenticated && (
          <Addcard onAddCard={handleAddCard} />
        )}
      <div className="flex flex-wrap justify-center">
        {Array.isArray(cards) ? (
          cards.map((item, index) => (
            <div key={index} className="m-4 p-4 border rounded-lg shadow-lg w-80">
              <Link to={`/card/${item._id}`}>
                <img src={item.image.url} alt={item.url} className="w-full h-40 object-cover rounded-t-lg" loading="lazy" />
                <div className="p-2">
                  <h2 className="text-xl font-semibold">{item.headline}</h2>
                  {/* <p className="text-gray-700">{truncateDescription(item.description, 50)}</p> */}
                  <button onClick={() => navigation(item._id)} className="text-blue-500 hover:underline">Read more</button>
                </div>
                {console.log(item._id)}
              </Link>
              {isAuthenticated && (
                <button
                  className='h-8 w-36 bg-red-500 mt-2'
                  onClick={() => {
                    console.log('Attempting to delete card with id:', item._id);
                    deleteCard(item._id);
                  }}
                >
                  Delete
                </button>
              )}
            </div>
          ))
        ) : (
          <p>No cards available</p>
        )}
      </div>
    </div>
  );
}

export default Cards;
