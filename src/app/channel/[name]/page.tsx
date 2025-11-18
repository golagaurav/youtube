'use client';

import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import VideoGrid from '../../../components/VideoGrid';
import { fetchChannelVideos, Video } from '../../../lib/youtubeApi';

const ChannelPage = () => {
  const router = useRouter();
  const { name } = router.query;

  const [videos, setVideos] = useState<
    { id: string; title: string; thumbnail: string; channel: string }[]
  >([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!name) return;

    const loadVideos = async () => {
      try {
        const channelVideos: Video[] = await fetchChannelVideos(name as string);
        const mappedVideos = channelVideos.map((v) => ({
          id: v.id.videoId,
          title: v.snippet.title,
          thumbnail: v.snippet.thumbnails.medium.url,
          channel: v.snippet.channelTitle,
        }));
        setVideos(mappedVideos);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadVideos();
  }, [name]);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h1 className="text-2xl font-bold p-4">{name} Channel</h1>
      <VideoGrid videos={videos} />
    </div>
  );
};

export default ChannelPage;
