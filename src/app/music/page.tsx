import React from 'react';
import VideoGrid from '../../components/VideoGrid';
import { fetchVideos } from '../../lib/youtubeApi';

const MusicPage = async () => {
  const videos = await fetchVideos('music');
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Music</h1>
      <VideoGrid videos={videos} />
    </div>
  );
};

export default MusicPage;
