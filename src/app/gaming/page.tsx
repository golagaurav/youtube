import React from 'react';
import VideoGrid from '../../components/VideoGrid';
import { fetchVideos } from '../../lib/youtubeApi';

const GamingPage = async () => {
  const videos = await fetchVideos('gaming'); 
  
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Gaming</h1>
      <VideoGrid videos={videos} />
    </div>
  );
};

export default GamingPage;
