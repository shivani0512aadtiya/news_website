import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const CardDetails = () => {
  const { id } = useParams();
  const [breaking, setBreaking] = useState(null);
  const [error, setError]= useState('');

  console.log('Breaking News:', breaking);

  useEffect(() => {
    const getbreakingnews = async () => {
      try {
        const response = await axios.get(`https://news-dyf7.onrender.com/getonebreakingnews/${id}`);
        setBreaking(response.data);
        console.log(response.data)
      } catch (error) {
        setError('Error fetching card details');
      }
    };
  
    getbreakingnews ();
  }, [id]);
  

  if (!breaking) {
    return <div>Loading...</div>;
  }

  return (
    <>
    <div className="max-w-xl mx-auto p-4">
    <img src={breaking.file.url} alt={breaking.headline} className="w-full h-auto object-cover mb-4" />
    <h2 className="text-2xl font-bold mb-2">{breaking.headline}</h2>
     <p className="text-base text-gray-700">{breaking.description}</p>

    </div>
    </>
  );
};
export default CardDetails;
