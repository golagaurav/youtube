import React, { useEffect, useState } from 'react';
import VideoGrid from '@/components/VideoGrid';
import { fetchVideos, Video } from '@/lib/youtubeApi';

export default function SportsPage() {
  const [videos, setVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getVideos = async () => {
      try {
        const data = await fetchVideos('sports');
        setVideos(data);
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
      <h1 className="text-2xl font-bold p-4">Sports Videos</h1>
      <VideoGrid videos={videos.map((v) => ({
        id: v.id.videoId,
        title: v.snippet.title,
        thumbnail: v.snippet.thumbnails.medium.url,
        channel: v.snippet.channelTitle,
      }))} />
    </div>
  );
}
