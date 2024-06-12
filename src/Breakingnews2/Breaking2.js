// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';

// function Breaking2() {
//   const [images, setImages] = useState([]);

//   useEffect(() => {
//     const getData = async () => {
//       try {
//         const response = await axios.get("https://news-dyf7.onrender.com/getbreakingnews");
//         console.log("API Response:", response.data);

//         if (response.data && Array.isArray(response.data.file)) {
//           setImages(response.data.file);
//         } else {
//           console.error("API response is not as expected:", response.data);
//         }
//       } catch (error) {
//         console.error("Failed to fetch breaking news:", error);
//       }
//     };
//     getData();
//   }, []);

//   const fourthImage = images[3];

//   return (
//     <div className="flex justify-center space-x-4">
//       {fourthImage ? (
//         <Link
//           to="/description"
//           state={{
//             description: fourthImage.description,
//             imageUrl: fourthImage.file?.url,
//             headline: fourthImage.headline
//           }}
//           className="block text-gray-700"
//         >
//           <div className="flex flex-row items-center">
//             {fourthImage.file && fourthImage.file.url && (
//               <img
//                 src={fourthImage.file.url}
//                 alt={fourthImage.url}
//                 className="h-custom-height rounded"
//                 loading="lazy"
//                 style={{ width: '60%' }}
//               />
//             )}
//             <div className="ml-4" style={{ fontSize: '2rem' }}>
//               {fourthImage.headline && (
//                 <span className="block text-left font-bold text-3xl text-black text-red-500">
//                   {fourthImage.headline}
//                 </span>
//               )}
//             </div>
//           </div>
//         </Link>
//       ) : (
//         <p>No cards available</p>
//       )}
//     </div>
//   );
// }

// export default Breaking2;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Breaking2() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get("https://news-dyf7.onrender.com/getbreakingnews");
        console.log("API Response:", response.data);

        if (response.data && Array.isArray(response.data.file)) {
          setImages(response.data.file);
        } else {
          console.error("API response is not as expected:", response.data);
        }
      } catch (error) {
        console.error("Failed to fetch breaking news:", error);
      }
    };
    getData();
  }, []);

  const fourthImage = images[3];

  return (
    <div className="flex justify-center space-x-4">
      {fourthImage ? (
        <Link
          to="/description"
          state={{
            description: fourthImage.description,
            imageUrl: fourthImage.file?.url,
            headline: fourthImage.headline
          }}
          className="block text-gray-700 w-full md:w-auto"
        >
          <div className="flex flex-col md:flex-row items-center">
            {fourthImage.file && fourthImage.file.url && (
              <img
                src={fourthImage.file.url}
                alt={fourthImage.url}
                className="h-auto md:h-custom-height rounded"
                loading="lazy"
                style={{ maxWidth: '60%' }}
              />
            )}
            <div className="md:ml-4 mt-4 md:mt-0">
              {fourthImage.headline && (
                <span className="block text-left font-bold text-3xl text-black text-red-500 overflow-hidden md:text-2xl lg:text-3xl">
                  {fourthImage.headline}
                </span>
              )}
            </div>
          </div>
        </Link>
      ) : (
        <p>No cards available</p>
      )}
    </div>
  );
}

export default Breaking2;
