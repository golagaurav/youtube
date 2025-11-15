// src/app/watch-later/page.tsx
import React from 'react';
import VideoGrid from '../../components/VideoGrid';
import { fetchVideos } from '../../lib/youtubeApi';

const WatchLaterPage = async () => {
  const videos = await fetchVideos('watch-later'); // Fetch videos saved to watch later
  
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Watch Later</h1>
      <VideoGrid videos={videos} />
    </div>
  );
};

export default WatchLaterPage;
