"use client";

import React, { useEffect, useState } from 'react';
import VideoGrid from '@/components/VideoGrid';
import { fetchVideos, Video } from '@/lib/youtubeApi';

export default function SubscriptionsPage() {
  const [videos, setVideos] = useState<{
    id: string;
    title: string;
    thumbnail: string;
    channel: string;
  }[]>([]); // Modified to match the shape expected by VideoGrid
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getVideos = async () => {
      try {
        const data = await fetchVideos('subscriptions'); // Replace 'subscriptions' with the actual query for subscriptions
        const mappedVideos = data.map((video: Video) => ({
          id: video.id.videoId,
          title: video.snippet.title,
          thumbnail: video.snippet.thumbnails.medium.url,
          channel: video.snippet.channelTitle,
        }));
        setVideos(mappedVideos);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    getVideos();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h1 className="text-2xl font-bold p-4">Subscriptions</h1>
      <VideoGrid videos={videos} />
    </div>
  );
}
