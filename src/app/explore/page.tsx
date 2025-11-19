import React from 'react';
import VideoGrid from '../../components/VideoGrid';
import { fetchVideos } from '../../lib/youtubeApi';

const ExplorePage = async () => {
  const videos = await fetchVideos('trending');
  
  return (
    <div>
      <h1 className="text-xl font-bold">Explore</h1>
      <VideoGrid videos={videos} />
    </div>
  );
};

export default ExplorePage;
