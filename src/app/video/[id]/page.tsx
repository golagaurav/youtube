'use client';

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';

interface VideoDetails {
  title: string;
  description: string;
  thumbnail: string;
}

const demoData: VideoDetails = {
  title: 'Rick Astley - Never Gonna Give You Up',
  description: 'The official video for “Never Gonna Give You Up” by Rick Astley.',
  thumbnail: 'https://i.ytimg.com/vi/dQw4w9WgXcQ/mqdefault.jpg',
};

export default function VideoPage() {
  const params = useParams();
  const videoId = params?.id ?? 'dQw4w9WgXcQ'; // Fallback demo video ID

  const [videoDetails, setVideoDetails] = useState<VideoDetails | null>(null);
  const [loading, setLoading] = useState(true);

  // Fetch video data (replace with real API call)
  useEffect(() => {
    const fetchVideo = async () => {
      try {
        // Uncomment for actual API request
        // const API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;
        // const res = await fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${API_KEY}`);
        // const data = await res.json();
        // if (data.items && data.items.length > 0) {
        //   const { title, description, thumbnails } = data.items[0].snippet;
        //   setVideoDetails({
        //     title,
        //     description,
        //     thumbnail: thumbnails.medium.url,
        //   });
        // }

        // Demo data fallback
        setTimeout(() => {
          setVideoDetails(demoData);
          setLoading(false);
        }, 500);
      } catch (error) {
        console.error('Error fetching video details:', error);
        setVideoDetails(null);
        setLoading(false);
      }
    };

    fetchVideo();
  }, [videoId]);

  if (loading) return <p className="text-center text-lg font-medium">Loading...</p>;

  if (!videoDetails) {
    return <p className="text-center text-lg font-medium text-red-500">Video not found or invalid ID.</p>;
  }

  return (
    <div className="p-4">
      <iframe
        className="w-full aspect-video rounded-lg"
        src={`https://www.youtube.com/embed/${videoId}`}
        allowFullScreen
        title={videoDetails.title}
      ></iframe>

      <div className="mt-4">
        <h2 className="text-xl font-bold">{videoDetails.title}</h2>
        <p className="text-gray-700 mt-2">{videoDetails.description}</p>
        <div className="mt-4">
          <img
            className="w-full max-w-xs rounded-lg cursor-pointer"
            src={videoDetails.thumbnail}
            alt={videoDetails.title}
            onClick={() => window.open(`https://www.youtube.com/watch?v=${videoId}`, '_blank')}
          />
        </div>
      </div>
    </div>
  );
}
