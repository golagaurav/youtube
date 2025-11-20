import React from 'react';
import VideoGrid from '../../components/VideoGrid';
import { fetchVideos } from '../../lib/youtubeApi';

const TrendingPage = async () => {
  const videos = await fetchVideos('trending');
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Trending</h1>
      <VideoGrid videos={videos} />
    </div>
  );
};

export default TrendingPage;
