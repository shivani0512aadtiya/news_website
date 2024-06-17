// import React, {useState,useEffect, useMemo} from 'react';
// import WhatsAppIcon from '@mui/icons-material/WhatsApp';
// import InstagramIcon from '@mui/icons-material/Instagram';
// import FacebookIcon from '@mui/icons-material/Facebook';
// import YouTubeIcon from '@mui/icons-material/YouTube';
// import TelegramIcon from '@mui/icons-material/Telegram';

// const HeadlineBar = () => {
//   const [dateTime, setDateTime] = useState({
//     date: new Date().toLocaleString(),
//     day: new Date().toLocaleDateString('en-US', { weekday: 'short' })
//   });
//   const memoizedDateTime = useMemo(() => dateTime, [dateTime]);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setDateTime({
//         date: new Date().toLocaleString(),
//         day: new Date().toLocaleDateString('en-US', { weekday: 'short' })
//       });
//     }, 1000);

//     return () => clearInterval(interval); // Cleanup interval on component unmount
//   }, []);

//   return (
//     <div className="bg-red-800 flex items-center text-white p-2 justify-between">
//           <div className="text-sm md:text-sm sm:text-2xm flex space-x-2">
//           <p>{memoizedDateTime.day}</p>
//           <p>{memoizedDateTime.date}</p>
//         </div>
//       <div className="flex-1 flex justify-center text-md md:text-xl lg:text-2xl">
//         <h1>Times Now India 24/7</h1>
//       </div>
//       <div className="flex space-x-2">
//         <WhatsAppIcon className="text-lg md:text-xl lg:text-2xl" />
//         <InstagramIcon className="text-lg md:text-xl lg:text-2xl" />
//         <FacebookIcon className="text-lg md:text-xl lg:text-2xl" />
//         <YouTubeIcon className="text-lg md:text-xl lg:text-2xl" />
//         <TelegramIcon className="text-lg md:text-xl lg:text-2xl" />
//       </div>
//     </div>
//   );
// };

// export default HeadlineBar;

import React, { useState, useEffect, useMemo } from 'react';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TelegramIcon from '@mui/icons-material/Telegram';

const HeadlineBar = () => {
  const [dateTime, setDateTime] = useState({
    date: new Date().toLocaleString(),
    day: new Date().toLocaleDateString('en-US', { weekday: 'short' })
  });

  const memoizedDateTime = useMemo(() => dateTime, [dateTime]);

  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime({
        date: new Date().toLocaleString(),
        day: new Date().toLocaleDateString('en-US', { weekday: 'short' })
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-red-800 flex flex-col md:flex-row items-center text-white p-2 md:justify-between">
      <div className="text-sm md:text-sm sm:text-2xm flex space-x-2 mb-2 md:mb-0">
        <p>{memoizedDateTime.day}</p>
        <p>{memoizedDateTime.date}</p>
      </div>
      <div className="flex-1 flex justify-center text-md md:text-xl lg:text-2xl mb-2 md:mb-0">
        <h1>Times Now India 24/7</h1>
      </div>
      <div className="flex space-x-2">
        <WhatsAppIcon className="text-lg md:text-xl lg:text-2xl" />
        <InstagramIcon className="text-lg md:text-xl lg:text-2xl" />
        <FacebookIcon className="text-lg md:text-xl lg:text-2xl" />
        <YouTubeIcon className="text-lg md:text-xl lg:text-2xl" />
        <TelegramIcon className="text-lg md:text-xl lg:text-2xl" />
      </div>
    </div>
  );
};

export default HeadlineBar;
