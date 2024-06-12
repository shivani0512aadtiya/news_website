import React from 'react';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TelegramIcon from '@mui/icons-material/Telegram';

const HeadlineBar = () => {
  return (
    <div className="bg-red-800 flex items-center text-white p-2 justify-between">
      <div className="flex-1 flex justify-center text-lg md:text-xl lg:text-2xl">
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
