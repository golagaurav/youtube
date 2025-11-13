import Sidebar from '../components/Sidebar';
import VideoCard from '../components/VideoCard';

const videos = [
  { id: 'kJQP7kiw5Fk', title: 'Despacito', thumbnail: '/thumbnail1.jpg' },
  { id: '3JZ_D3ELwOQ', title: 'See You Again', thumbnail: '/thumbnail2.jpg' },
];

export default function HomePage() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {videos.map((video) => (
          <VideoCard key={video.id} {...video} />
        ))}
      </main>
    </div>
  );
}
