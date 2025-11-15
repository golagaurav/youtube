// src/app/channel/[name]/page.tsx
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { fetchChannelVideos } from '../../lib/youtubeApi';
import VideoGrid from '../../components/VideoGrid';

const ChannelPage = () => {
  const router = useRouter();
  const { name } = router.query;
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    if (name) {
      const loadVideos = async () => {
        const channelVideos = await fetchChannelVideos(name);
        setVideos(channelVideos);
      };
      loadVideos();
    }
  }, [name]);

  return (
    <div>
      <h1 className="text-xl font-bold">{name} Channel</h1>
      <VideoGrid videos={videos} />
    </div>
  );
};

export default ChannelPage;
