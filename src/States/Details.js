// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';

// const Detail = () => {
//   const { id } = useParams();
//   const [news, setNews] = useState(null);
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const getNewsDetail = async () => {
//       try {
//         const response = await axios.get(`https://news-dyf7.onrender.com/getonenews/${id}`);
//         if (response.data) {
//           setNews(response.data);
//           setError(null);
//         } else {
//           setError('News not found');
//         }
//       } catch (error) {
//         setError('Failed to fetch news');
//       } finally {
//         setLoading(false);
//       }
//     };

//     getNewsDetail();
//   }, [id]);

//   if (loading) {
//     return <p>Loading...</p>;
//   }

//   if (error) {
//     return <p>Error: {error}</p>;
//   }

//   if (!news) {
//     return <p>News not found</p>;
//   }

//   return (
//     <div className="max-w-xl mx-auto p-4">
//       <img src={news.file.url} alt={news.headline} className="w-full h-auto object-cover mb-4" loading="lazy" />
//       <div className="p-2">
//         <h2 className="text-2xl font-bold mb-2">{news.headline}</h2>
//         <p className="text-base text-gray-700">{news.description}</p>
//         <p className="text-gray-500">{news.city}, {news.state}</p>
//       </div>
//     </div>
//   );
// }
// export default Detail;


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Detail = () => {
  const { id } = useParams();
  const [newsDetail, setNewsDetail] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  console.log("id is :", id)

  useEffect(() => {
    const getNewsDetail = async () => {
      try {
        const response = await axios.get(`https://news-dyf7.onrender.com/getonenews/${id}`);
        console.log('Response:', response.data); 
        if (response.data) {
          setNewsDetail(response.data);
          setError(null);
        } else {
          setError('News not found');
        }
      } catch (error) {
        console.error('Error fetching news:', error);
        if (error.response && error.response.status === 404) {
          setError('News not found (404)');
        } else {
          setError('Failed to fetch news');
        }
      } finally {
        setLoading(false);
      }
    };

    getNewsDetail();
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!newsDetail) {
    return <p>News not found</p>;
  }

  return (
    <div className="max-w-xl mx-auto p-4">
      <img src={newsDetail?.file?.url} alt={newsDetail?.headline} className="w-full h-auto object-cover mb-4" loading="lazy" />
      <div className="p-2">
        <h2 className="text-2xl font-bold mb-2">{newsDetail?.headline}</h2>
        <p className="text-base text-gray-700">{newsDetail?.description}</p>
        <p className="text-gray-500">{newsDetail?.city}, {newsDetail?.state}</p>
      </div>
    </div>
  );
}

export default Detail;





