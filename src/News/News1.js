// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';

// const News1 = () => {
//   const [news, setNews] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const getData = async () => {
//       try {
//         const response = await axios.get("https://news-dyf7.onrender.com/getcard");
//         console.log("response", response.data);

//         if (response.data && Array.isArray(response.data.photos)) {
//           setNews(response.data.photos);
//         } else {
//           console.error('Expected an array but got:', response.data);
//           setError('Invalid data format');
//         }
//       } catch (error) {
//         console.log(error);
//         setError('Failed to fetch data');
//       } finally {
//         setLoading(false);
//       }
//     };
//     getData();
//   }, []);

//   if (loading) {
//     return <p>Loading...</p>;
//   }

//   if (error) {
//     return <p>{error}</p>;
//   }

//   return (
//     <div className="container mx-auto mt-4">
//       <div className="grid grid-cols-3 sm:grid-cols-4 gap-8">
//         {Array.isArray(news) && news.length > 0 ? (
//           news.map((item, index) => {
//             const isBigCard = index === 0;
//             return (
//               <Link 
//                 to={`/news/${item._id}`} 
//                 key={item._id} 
//                 className={`border rounded-lg shadow-lg p-4 ${isBigCard ? 'md:col-span-2' : ''}`}
//               >
//                <img src={item.image.url} alt={item.url} className="w-full h-64 object-cover rounded-t-lg" loading="lazy" />
//                 <div className="p-2">
//                   <h2 className="text-xl font-semibold">{item.headline}</h2>
//                   <p className="text-gray-700">{item.description.slice(0, 50)}...</p>
//                   <p className="text-blue-500 hover:underline">Read more</p>
//                 </div>
//               </Link>
//             );
//           })
//         ) : (
//           <p>No cards available</p>
//         )}
//       </div>
//     </div>
//   );
// }

// export default News1;

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';

// const News1 = () => {
//   const [news, setNews] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const getData = async () => {
//       try {
//         const response = await axios.get("https://news-dyf7.onrender.com/getcard");
//         console.log("response", response.data);

//         if (response.data && Array.isArray(response.data.photos)) {
//           setNews(response.data.photos);
//         } else {
//           console.error('Expected an array but got:', response.data);
//           setError('Invalid data format');
//         }
//       } catch (error) {
//         console.log(error);
//         setError('Failed to fetch data');
//       } finally {
//         setLoading(false);
//       }
//     };
//     getData();
//   }, []);

//   if (loading) {
//     return <p>Loading...</p>;
//   }

//   if (error) {
//     return <p>{error}</p>;
//   }

//   return (
//     <div className="container mx-auto mt-4">
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
//         {Array.isArray(news) && news.length > 0 ? (
//           news.map((item, index) => {
//             return (
//               <Link 
//                 to={`/news/${item._id}`} 
//                 key={item._id} 
//                 className="border rounded-lg shadow-lg p-4"
//               >
//                 <img src={item.image.url} alt={item.url} className="w-full h-64 object-cover rounded-t-lg" loading="lazy" />
//                 <div className="p-2">
//                   <h2 className="text-xl font-semibold">{item.headline}</h2>
//                   <p className="text-gray-700">{item.description.slice(0, 50)}...</p>
//                   <p className="text-blue-500 hover:underline">Read more</p>
//                 </div>
//               </Link>
//             );
//           })
//         ) : (
//           <p>No cards available</p>
//         )}
//       </div>
//     </div>
//   );
// }

// export default News1;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const News1 = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get("https://news-dyf7.onrender.com/getcard");
        console.log("response", response.data);

        if (response.data && Array.isArray(response.data.photos)) {
          setNews(response.data.photos);
        } else {
          console.error('Expected an array but got:', response.data);
          setError('Invalid data format');
        }
      } catch (error) {
        console.log(error);
        setError('Failed to fetch data');
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="container mx-auto mt-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {Array.isArray(news) && news.length > 0 ? (
          news.map((item, index) => {
            return (
              <Link 
                to={`/news/${item._id}`} 
                key={item._id} 
                className="border rounded-lg shadow-lg p-4"
              >
                <img src={item.image.url} alt={item.url} className="w-full h-64 object-cover rounded-t-lg" loading="lazy" />
                <div className="p-2">
                  <h2 className="text-xl font-semibold">{item.headline}</h2>
                  <p className="text-gray-700">{item.description.slice(0, 50)}...</p>
                  <p className="text-blue-500 hover:underline">Read more</p>
                </div>
              </Link>
            );
          })
        ) : (
          <p>No cards available</p>
        )}
      </div>
    </div>
  );
}

export default News1;
