import React from 'react';
import VideoGrid from '../../components/VideoGrid';
import { fetchVideos } from '../../lib/youtubeApi';

const LibraryPage = async () => {
  const videos = await fetchVideos('library');
  
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Library</h1>
      <VideoGrid videos={videos} />
    </div>
  );
};

export default LibraryPage;
