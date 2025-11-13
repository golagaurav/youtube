'use client';
import Navbar from '@/components/Navbar'; // 👈 Navbar import
import Sidebar from '../components/Sidebar';
import VideoCard from '../components/VideoCard';

const videos = [
  { id: 'kJQP7kiw5Fk', title: 'Despacito', thumbnail: '/thumbnail1.jpg' },
  { id: '3JZ_D3ELwOQ', title: 'See You Again', thumbnail: '/thumbnail2.jpg' },
];

export default function HomePage() {
  const handleMenuToggle = () => {
    console.log('Sidebar toggle clicked');
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#0f0f0f]">
      {/* ✅ Navbar on top */}
      <Navbar onMenuToggle={handleMenuToggle} />

      {/* ✅ Sidebar + main content below navbar */}
      <div className="flex">
        <Sidebar />

        <main className="flex-1 p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {videos.map((video) => (
            <VideoCard key={video.id} {...video} />
          ))}
        </main>
      </div>
    </div>
  );
}
