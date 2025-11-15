"use client";  // Mark this file as a Client Component for hooks

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

interface VideoPageProps {
  params: { id: string };
}

interface VideoDetails {
  title: string;
  description: string;
  thumbnail: string;
}

const fetchVideoDetails = async (videoId: string): Promise<VideoDetails | null> => {
  const API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;
  const BASE_URL = 'https://www.googleapis.com/youtube/v3/videos';
  try {
    const res = await fetch(
      `${BASE_URL}?part=snippet&id=${videoId}&key=${API_KEY}`
    );
    const data = await res.json();
    if (data.items && data.items.length > 0) {
      const { title, description, thumbnails } = data.items[0].snippet;
      return {
        title,
        description,
        thumbnail: thumbnails.medium.url,  // Use medium-sized thumbnail for better quality
      };
    }
    return null;
  } catch (error) {
    console.error('Error fetching video details:', error);
    return null;
  }
};

export default function VideoPage({ params }: VideoPageProps) {
  const videoId = params.id;

  const [videoDetails, setVideoDetails] = useState<VideoDetails | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getVideoDetails = async () => {
      const details = await fetchVideoDetails(videoId);
      setVideoDetails(details);
      setLoading(false);
    };

    getVideoDetails();
  }, [videoId]);

  if (loading) return <p>Loading...</p>;

  if (!videoDetails) {
    return <p>Video not found or invalid ID.</p>;
  }

  return (
    <div className="p-4">
      <iframe
        className="w-full aspect-video rounded-lg"
        src={`https://www.youtube.com/embed/${videoId}`}
        allowFullScreen
      ></iframe>
      <div className="mt-4">
        <h2 className="text-lg font-bold">{videoDetails.title}</h2>
        <p>{videoDetails.description}</p>
        {/* Using Next.js Image component for optimization */}
        <div className="relative mt-4 w-full max-w-xs">
          <Image
            src={videoDetails.thumbnail}
            alt={videoDetails.title}
            width={320}  // Width of the image
            height={180} // Height of the image
            className="rounded-lg object-cover"
            priority  // Prioritize image loading for faster LCP
          />
        </div>
      </div>
    </div>
  );
}
