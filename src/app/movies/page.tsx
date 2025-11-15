// src/app/movies/page.tsx
import React from 'react';
import VideoGrid from '../../components/VideoGrid';
import { fetchVideos } from '../../lib/youtubeApi';

const MoviesPage = async () => {
  const videos = await fetchVideos('movies'); // Fetch movie-related videos
  
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Movies</h1>
      <VideoGrid videos={videos} />
    </div>
  );
};

export default MoviesPage;
