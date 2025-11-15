// src/app/liked/page.tsx
import React from 'react';
import VideoGrid from '../../components/VideoGrid';
import { fetchVideos } from '../../lib/youtubeApi';

const LikedPage = async () => {
  const videos = await fetchVideos('liked'); // Fetch liked videos
  
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Liked Videos</h1>
      <VideoGrid videos={videos} />
    </div>
  );
};

export default LikedPage;
