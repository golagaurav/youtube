// src/app/your-videos/page.tsx
import React from 'react';
import VideoGrid from '../../components/VideoGrid';
import { fetchVideos } from '../../lib/youtubeApi';

const YourVideosPage = async () => {
  const videos = await fetchVideos('your-videos'); // Fetch user's uploaded videos
  
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Your Videos</h1>
      <VideoGrid videos={videos} />
    </div>
  );
};

export default YourVideosPage;
