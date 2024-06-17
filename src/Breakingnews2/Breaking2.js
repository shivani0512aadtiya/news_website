// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';
// import {
//   EmailShareButton,
//   FacebookShareButton,
//   WhatsappShareButton,
//   EmailIcon,
//   FacebookIcon,
//   WhatsappIcon
// } from "react-share";
// import ShareIcon from '@mui/icons-material/Share';

// function Breaking2() {
//   const [images, setImages] = useState([]);
//   const [loading,setLoading] = useState("");
//   const [openDropdowns, setOpenDropdowns] = useState({});

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
//   if (!images) {
//     return <div>Loading...</div>;
//   }

//   const toggleDropdown = (index) => {
//     setOpenDropdowns((prev) => ({
//       ...prev,
//       [index]: !prev[index],
//     }));
//   };

//   const closeDropdown = (index) => {
//     setOpenDropdowns((prev) => ({
//       ...prev,
//       [index]: false,
//     }));
//   };

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
//           className="block text-gray-700 w-full md:w-auto"
//         >
//           <div className="flex flex-col md:flex-row items-center">
//             {fourthImage.file && fourthImage.file.url && (
//                <img
//                src={fourthImage.file.url}
//                alt={fourthImage.url}
//                className="w-96 h-auto object-cover rounded"
//                loading="lazy"
//         />
//      )}  
//             <div className="md:ml-4 mt-4 md:mt-0">
//               {fourthImage.headline && (
//                 <span className="block text-left font-bold text-3xl text-black text-red-500 overflow-hidden md:text-2xl lg:text-3xl">
//                   {fourthImage.headline}
//                 </span>
//               )}
//             </div>
//           </div>
//         </Link>
//       ) : (
//         <p>{loading}</p>
//       )}
//     </div>
//   );
// }
// export default Breaking2;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {
  EmailShareButton,
  FacebookShareButton,
  WhatsappShareButton,
  EmailIcon,
  FacebookIcon,
  WhatsappIcon
} from "react-share";
import ShareIcon from '@mui/icons-material/Share';

function Breaking2() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [openDropdowns, setOpenDropdowns] = useState({});

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
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  const toggleDropdown = (index) => {
    setOpenDropdowns((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const closeDropdown = (index) => {
    setOpenDropdowns((prev) => ({
      ...prev,
      [index]: false,
    }));
  };

  const fourthImage = images[3];

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex justify-center space-x-4">
      {fourthImage ? (
        <div> 
            <div className="flex flex-col md:flex-row items-center">
          <Link
            to="/description"
            state={{
              description: fourthImage.description,
              imageUrl: fourthImage.file?.url,
              headline: fourthImage.headline
            }}
            className="block text-gray-700 w-full md:w-auto"
          >
              {fourthImage.file && fourthImage.file.url && (
                <img
                  src={fourthImage.file.url}
                  alt={fourthImage.url}
                  className="w-96 h-auto object-cover rounded"
                  loading="lazy"
                />
              )}
              <div className="md:ml-4 mt-4 md:mt-0">               
                {fourthImage.headline && (
                  <span className="block text-left font-bold text-3xl text-black text-red-500 overflow-hidden md:text-2xl lg:text-3xl">
                    {fourthImage.headline}
                  </span>
                )}
              </div>
              </Link>
            </div>
        </div>
      ) : (
        <p>No breaking news available</p>
      )}
    </div>
  );
}

export default Breaking2;
