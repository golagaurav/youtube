'use client';

import { useEffect, useState } from 'react';
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
  const videoId = params?.id ?? 'dQw4w9WgXcQ';

  const [videoDetails, setVideoDetails] = useState<VideoDetails | null>(null);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const fetchVideo = async () => {
      try {

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

  if (loading) return 
  <p className="text-center text-lg font-medium">Loading...</p>;

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
