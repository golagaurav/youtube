import React from 'react';
import VideoCard from './VideoCard';

type Video = {
  id: string;
  title: string;
  thumbnail: string;
  channel: string;
};

type VideoGridProps = {
  videos?: Video[];
};

const mockVideos: Video[] = [
  { id: 'dQw4w9WgXcQ', title: 'Next.js + Tailwind Tutorial', thumbnail: '/thumbnail1.jpg', channel: 'DevTube' },
  { id: 'kJQP7kiw5Fk', title: 'Learn TypeScript in 10 minutes', thumbnail: '/thumbnail2.jpg', channel: 'CodeMaster' },
];

export default function VideoGrid({ videos = mockVideos }: VideoGridProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
      {videos.map((v) => (
        <VideoCard key={v.id} {...v} />
      ))}
    </div>
  );
}
