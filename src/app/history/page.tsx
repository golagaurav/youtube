import React from 'react';
import VideoGrid from '../../components/VideoGrid';
import { fetchVideos } from '../../lib/youtubeApi';

const HistoryPage = async () => {
  const videos = await fetchVideos('history');
  
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">History</h1>
      <VideoGrid videos={videos} />
    </div>
  );
};

export default HistoryPage;
