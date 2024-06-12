// import React, { useState, useEffect } from 'react';
// import { useAuth } from '../Admineditor.js/AuthProvider';
// import { Link } from 'react-router-dom';
// import LiveTvIcon from '@mui/icons-material/LiveTv';
// import VideoCallIcon from '@mui/icons-material/VideoCall';
// import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
// import WebStoriesIcon from '@mui/icons-material/WebStories';
// import CollectionsIcon from '@mui/icons-material/Collections';
// import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
// import LocalMoviesIcon from '@mui/icons-material/LocalMovies';
// import TextsmsIcon from '@mui/icons-material/Textsms';
// import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver';
// import ControlAdmin from './ControlAdmin';
// import axios from 'axios';

// const Breakingn = () => {
//   const { isAuthenticated, token } = useAuth();
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [images, setImages] = useState([]);
//   const [heading, setHeading] = useState("");
//   const [description, setDescription] = useState("");
//   const [error, setError] = useState("");
//   const [videos, setVideos] = useState([]);
//   const [newVideoLink, setNewVideoLink] = useState('');

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
  
//   useEffect(() => {
//     if (images.length > 0) {
//       const interval = setInterval(() => {
//         setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//       }, 3000);
//       return () => clearInterval(interval);
//     }
//   }, [images]);

//   const deletenews = async (_id) => {
//     if (!_id) {
//       console.log('Delete request failed: id is undefined');
//       return;
//     }
//     try {
//       await axios.delete(`https://news-dyf7.onrender.com/deletephoto/${_id}`, {
//         headers: {
//           Authorization: `Bearer ${token}`
//         }
//       });
//       setImages(prevImages => prevImages.filter(image => image._id !== _id));
//     } catch (error) {
//       console.log('AxiosError', error);
//     }
//   };

//   return (
//     <div className="flex flex-wrap justify-between w-full mx-auto mt-8 space-y-4 lg:space-y-0 lg:space-x-8">
//       {error && <div className="error-message">{error}</div>}
//       <div className="w-full md:w-80 h-[34rem] bg-white rounded-lg shadow-lg pl-16 mb-4 lg:mb-0 lg:custom-margin">
//         <form className="space-y-8 text-black">
//           <p><LiveTvIcon /> लाइव टीवी</p>
//           <p><VideoCallIcon /> वीडियो</p>
//           <p><VideoLibraryIcon /> शॉर्ट वीडियो</p>
//           <p><RecordVoiceOverIcon /> पॉडकास्ट</p>
//           <p><WebStoriesIcon /> वेब स्टोरीज</p>
//           <p><CollectionsIcon /> फोटो गैलरी</p>
//           <p><SportsEsportsIcon /> खेल</p>
//           <p><LocalMoviesIcon /> मूवी रिव्यू</p>
//           <p><TextsmsIcon /> ओपिनियन</p>
//         </form>
//       </div>
//       <div className="w-full md:w-2/4 overflow-hidden relative rounded-lg shadow-lg p-4 mb-4 lg:mb-0">
//         {Array.isArray(images) && images.length > 0 ? (
//           <>
//             <div className="flex overflow-hidden mt-8">
//               <div
//                 className="flex transition-transform duration-1000"
//                 style={{ transform: `translateX(-${currentIndex * 100}%)`, width: `${Math.min(images.length, 3) * 100}%` }}
//               >
//                 {images.map((item, index) => (
//                   <div key={index} className="w-full flex-shrink-0">
//                     {item.headline && (
//                       <h2 className="text-center font-bold relative text-3xl text-black">{item.headline}</h2>
//                     )}
//                     {item.file && item.file.url && (
//                       <img src={item.file.url} alt={item.url} className="h-64 w-full object-contain" loading="lazy" />
//                     )}
//                     <div className="p-2">
//                       {item.description && (
//                         <p className="text-gray-700">{item.description}</p>
//                       )}
//                     </div>
//                     {isAuthenticated && (
//                       <button
//                         className='h-8 w-36 bg-red-500 mt-2'
//                         onClick={() => {
//                           console.log('Attempting to delete card with id:', item._id);
//                           deletenews(item._id);
//                         }}
//                       >
//                         Delete
//                       </button>
//                     )}
//                   </div>
//                 ))}
//               </div>
//             </div>
//             <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3">
//               {images.slice(0, 3).map((_, index) => (
//                 <button
//                   key={index}
//                   className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-blue-500' : 'bg-gray-300'}`}
//                   onClick={() => setCurrentIndex(index)}
//                 ></button>
//               ))}
//             </div>
//           </>
//         ) : (
//           <p>No cards available</p>
//         )}
//       </div>
//       <div className="w-full md:w-80 h-[34rem] bg-white rounded-lg shadow-lg p-4">
//         <div className="space-y-4 h-full flex flex-col justify-between pr-8">
//           <iframe
//             width="100%"
//             height="48%"
//             src="https://www.youtube.com/embed/dQw4w9WgXcQ"
//             title="YouTube video player"
//             frameBorder="0"
//             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//             allowFullScreen
//             loading="lazy"
//           ></iframe>
//           <iframe
//             width="100%"
//             height="48%"
//             src="https://www.youtube.com/embed/dQw4w9WgXcQ"
//             title="YouTube video player"
//             frameBorder="0"
//             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//             allowFullScreen
//             loading="lazy"
//           ></iframe>
//         </div>
//       </div>

//       {isAuthenticated && (
//         <ControlAdmin
//           setHeading={setHeading}
//           setDescription={setDescription}
//         />
//       )}
//     </div>
//   );
// };

// export default Breakingn;

import React, { useState, useEffect } from 'react';
import { useAuth } from '../Admineditor.js/AuthProvider';
import { Link } from 'react-router-dom';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import WebStoriesIcon from '@mui/icons-material/WebStories';
import CollectionsIcon from '@mui/icons-material/Collections';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';
import TextsmsIcon from '@mui/icons-material/Textsms';
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver';
import ControlAdmin from './ControlAdmin';
import axios from 'axios';

const Breakingn = () => {
  const { isAuthenticated, token } = useAuth();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [images, setImages] = useState([]);
  const [heading, setHeading] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");
  const [video, setVideo] = useState([]);

   const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://news-dyf7.onrender.com/getlink"
      );
      console.log(response.data);
      setVideo(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);


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
  
  useEffect(() => {
    if (images.length > 0) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [images]);

  const deletenews = async (_id) => {
    if (!_id) {
      console.log('Delete request failed: id is undefined');
      return;
    }
    try {
      const response = await axios.delete(`https://news-dyf7.onrender.com/deletebreakingnews/${_id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      console.log('Delete response:', response);
      setImages(prevImages => prevImages.filter(image => image._id !== _id));
    } catch (error) {
      console.log('AxiosError', error);
      if (error.response) {
        console.log('Response data:', error.response.data);
        console.log('Response status:', error.response.status);
        console.log('Response headers:', error.response.headers);
      }
    }
  };

  const deletevideo = async (_id) => {
    if (!_id) {
      console.error('Delete request failed: id is undefined');
      return;
    }

    try {
      await axios.delete(`https://news-dyf7.onrender.com/deletelink/${_id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setVideo((prevvideo) => prevvideo.filter((v) => v._id !== _id));
    } catch (error) {
      console.log('AxiosError', error);
    }
  };
  
  return (
    <div className="flex flex-wrap justify-between w-full mx-auto mt-8 space-y-4 lg:space-y-0 lg:space-x-8">
      {error && <div className="error-message">{error}</div>}
      <div className="hidden md:block w-full md:w-80 h-[34rem] bg-white rounded-lg shadow-lg pl-16 mb-4 lg:mb-0 lg:custom-margin">
    <form className="space-y-8 text-black">
    <p><LiveTvIcon /> लाइव टीवी</p>
    <p><VideoCallIcon /> वीडियो</p>
    <p><VideoLibraryIcon /> शॉर्ट वीडियो</p>
    <p><RecordVoiceOverIcon /> पॉडकास्ट</p>
    <p><WebStoriesIcon /> वेब स्टोरीज</p>
    <p><CollectionsIcon /> फोटो गैलरी</p>
    <p><SportsEsportsIcon /> खेल</p>
    <p><LocalMoviesIcon /> मूवी रिव्यू</p>
    <p><TextsmsIcon /> ओपिनियन</p>
      </form>
        </div>

   <div className="w-full md:w-2/4 overflow-hidden relative rounded-lg shadow-lg p-4 mb-4 lg:mb-0">
  {Array.isArray(images) && images.length > 0 ? (
    <>
      <div className="flex overflow-hidden mt-8">
        <div
          className="flex transition-transform duration-1000"
          style={{ transform: `translateX(-${currentIndex * 100}%)`, width: `${Math.min(images.length, 3) * 100}%` }}
        >
          {images.map((item, index) => (
            <div key={index} className="w-full flex-shrink-0 space-y-4">
              <Link to={`/breaking/${item._id}`}>
                {item.file && item.file.url && (
                  <img src={item.file.url} alt={item.url} className="h-48 md:h-64 w-full object-contain" loading="lazy" />
                )}
                {item.headline && (
                  <h2 className="text-center pt-4 font-semibold relative text-2xl md:text-3xl lg:text-4xl text-black">{item.headline}</h2>
                )}
              </Link>
              {isAuthenticated && (
                <button
                  className='h-8 w-36 bg-red-500 mt-2'
                  onClick={() => {
                    console.log('Attempting to delete card with id:', item._id);
                    deletenews(item._id);
                  }}
                >
                  Delete
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {images.slice(0, 3).map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-blue-500' : 'bg-gray-300'}`}
            onClick={() => setCurrentIndex(index)}
          ></button>
        ))}
      </div>
    </>
  ) : (
    <p>No cards available</p>
  )}
</div>
<div className="w-full md:w-80 bg-white rounded-lg shadow-lg p-4 overflow-hidden">
  <div className="space-y-4 flex flex-col justify-between pr-8">
    {video.map((vid, id) => (
      <div key={id} className="">
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            src={`https://www.youtube.com/embed/${vid.url}`}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="video-iframe"
          ></iframe>
        </div>
        <div className="mt-3">
          <Link
            to={vid.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500"
          >
            {vid.url}
          </Link>
        </div>
        {isAuthenticated && (
                <button
                  className="h-8 w-20 bg-red-500 mt-2"
                  onClick={() => {
                    console.log('Attempting to delete card with id:', vid._id);
                    deletevideo (vid._id);
                  }}
                >
                  Delete
                </button>
              )}
      </div>

    ))}
  </div>
</div>
{isAuthenticated && (
        <ControlAdmin
          setHeading={setHeading}
          setDescription={setDescription}
        />
      )}
    </div>
  );
};

export default Breakingn;