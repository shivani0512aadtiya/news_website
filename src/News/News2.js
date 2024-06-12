// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Link,useNavigate  } from 'react-router-dom';
// import { useAuth } from '../Admineditor.js/AuthProvider';

// const News2 = () => {
//   const [news, setNews] = useState([]);
//   const [error, setError] = useState(null);
  
  

//   const navigate = useNavigate()

//    const navigation = (id) => {
//     navigate(`/news/${id}`);
//     console.log(`id is ${id}`)
//   };

//   useEffect(() => {
//     const getData = async () => {
//       try {
//         const response = await axios.get("https://news-dyf7.onrender.com/getnews");
//         console.log("response", response.data);

//         if (response.data && Array.isArray(response.data.file)) {
//           setNews(response.data.file);
//         } else {
//           console.error('Expected an array but got:', response.data);
//           setError('Invalid data structure');
//         }
//       } catch (error) {
//         console.log(error);
//         setError('Failed to fetch news');
//       }
//     };
//     getData();
//   }, []);

//   if (error) {
//     return <div className="container mx-auto">Error: {error}</div>;
//   }

//   return (
//     <div className="container mx-auto">
//       <div className="grid grid-cols-3 sm:grid-cols-4 gap-8">
//         {Array.isArray(news) && news.length > 0 ? (
//           news.map((item, index) => {
//             const isBigCard = index === 0;
//             return (
//               <Link 
//                 to={`/news/${item.id}`} 
//                 key={item.id} 
//                 className={`border rounded-lg shadow-lg p-4 ${isBigCard ? 'md:col-span-2' : ''}`}
//               >
//                 <img 
//                   src={item.file.url} 
//                   alt={item.url} 
//                   className={`w-full ${isBigCard ? 'h-96' : 'h-64'} object-cover rounded-t-lg`} 
//                   loading="lazy" 
//                 />
//                 <div className="p-2">
//                   <h2 className="text-xl font-semibold">{item.headline}</h2>
//                   <p className="text-gray-700">{item.description.slice(0, 50)}...</p>
//                   <button onClick={() => navigation(item._id)} className="text-blue-500 hover:underline">Read more</button>
//                   {isBigCard && (
//                     <div className="mt-2">
//                       <p className="text-gray-500 text-sm">Updated data here</p>
//                     </div>
//                   )}
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
// export default News2;

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Link, useNavigate } from 'react-router-dom';

// const News2 = () => {
//   const [news, setNews] = useState([]);
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const getData = async () => {
//       try {
//         const response = await axios.get("https://news-dyf7.onrender.com/getnews");
//         console.log("response", response.data);

//         if (response.data && response.data.file && Array.isArray(response.data.file)) {
//           setNews(response.data.file);
//         } else {
//           console.error('Expected an array but got:', response.data);
//           setError('Invalid data structure');
//         }
//       } catch (error) {
//         console.log(error);
//         setError('Failed to fetch news');
//       }
//     };
//     getData();
//   }, []);

//   if (error) {
//     return <div className="container mx-auto">Error: {error}</div>;
//   }

//   const truncateDescription = (description, length) => {
//     if (description.length <= length) return description;
//     return `${description.substring(0, length)}...`;
//   };

//   return (
//     <div className="container mx-auto mt-4">
//       <div className="grid grid-cols-3 sm:grid-cols-4 gap-8">
//         {Array.isArray(news) && news.length > 0 ? (
//           news.map((item) => (
//             <div key={item._id} className="card">
//               <Link to={`/news2/${item._id}`}
//               >
//                 {item.file && item.file.url ? (
//                   <img
//                     src={item.file.url}
//                     alt={item.headline || 'News image'}
//                     className="w-full h-40 object-cover rounded-t-lg"
//                     loading="lazy"
//                   />
//                 ) : (
//                   <div className="w-full h-40 bg-gray-200 rounded-t-lg flex items-center justify-center">
//                     <span>No Image</span>
//                   </div>
//                 )}
//                 <div className="p-2">
//                   <h2 className="text-xl font-semibold">{item.headline}</h2>
//                   <p className="text-gray-700">{truncateDescription(item.description, 50)}</p>
//                   <button
//                     onClick={() => navigate(`/news/${item._id}`)}
//                     className="text-blue-500 hover:underline"
//                   >
//                     Read more
//                   </button>
//                 </div>
//               </Link>
//               {console.log(item._id)}
//             </div>
//           ))
//         ) : (
//           <p>No cards available</p>
//         )}
//       </div>
//     </div>
//   );
// }

// export default News2;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const News2 = () => {
  const [news, setNews] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get("https://news-dyf7.onrender.com/getnews");
        console.log("response", response.data);

        if (response.data && response.data.file && Array.isArray(response.data.file)) {
          setNews(response.data.file);
        } else {
          console.error('Expected an array but got:', response.data);
          setError('Invalid data structure');
        }
      } catch (error) {
        console.log(error);
        setError('Failed to fetch news');
      }
    };
    getData();
  }, []);

  if (error) {
    return <div className="container mx-auto">Error: {error}</div>;
  }

  const truncateDescription = (description, length) => {
    if (description.length <= length) return description;
    return `${description.substring(0, length)}...`;
  };

  return (
    <div className="container mx-auto mt-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {Array.isArray(news) && news.length > 0 ? (
          news.map((item) => (
            <div key={item._id} className="card flex flex-col">
              <Link to={`/news2/${item._id}`} className="flex-1">
                {item.file && item.file.url ? (
                  <img
                    src={item.file.url}
                    alt={item.headline || 'News image'}
                    className="w-full h-40 object-cover rounded-t-lg"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-full h-40 bg-gray-200 rounded-t-lg flex items-center justify-center">
                    <span>No Image</span>
                  </div>
                )}
                <div className="p-2">
                  <h2 className="text-xl font-semibold">{item.headline}</h2>
                  <p className="text-gray-700">{truncateDescription(item.description, 50)}</p>
                  <button
                    onClick={() => navigate(`/news/${item._id}`)}
                    className="text-blue-500 hover:underline"
                  >
                    Read more
                  </button>
                </div>
              </Link>
              {console.log(item._id)}
            </div>
          ))
        ) : (
          <p>No cards available</p>
        )}
      </div>
    </div>
  );
}

export default News2;
