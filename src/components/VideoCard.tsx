'use client';

interface VideoCardProps {
  title: string;
  thumbnail: string;
  id: string;
}

export default function VideoCard({ title, thumbnail, id }: VideoCardProps) {
  return (
    <a href={`/video/${id}`} className="flex flex-col gap-2 hover:scale-105 transition-transform">
      <img src={thumbnail} alt={title} className="rounded-lg" />
      <h3 className="text-sm font-semibold">{title}</h3>
    </a>
  );
}
