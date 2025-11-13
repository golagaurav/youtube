'use client';

import {
  FiHome,
  FiClock,
  FiThumbsUp,
  FiPlayCircle,
} from 'react-icons/fi';
import {
  MdSubscriptions,
  MdVideoLibrary,
  MdOutlineExplore,
  MdOutlineSmartDisplay,
  MdOutlineWatchLater,
  MdOutlineHistory,
} from 'react-icons/md';
import { IoMdMusicalNotes } from 'react-icons/io';
import { FaFire, FaGamepad, FaTrophy, FaFilm } from 'react-icons/fa';
import Image from 'next/image';

const channels = [
  { name: 'MrBeast', avatar: 'https://i.pravatar.cc/40?img=1' },
  { name: 'T-Series', avatar: 'https://i.pravatar.cc/40?img=2' },
  { name: 'TechBurner', avatar: 'https://i.pravatar.cc/40?img=3' },
  { name: 'Fireship', avatar: 'https://i.pravatar.cc/40?img=4' },
];

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white dark:bg-[#0f0f0f] text-gray-900 dark:text-white min-h-screen sticky top-0 overflow-y-auto scrollbar-hide">
      <ul className="flex flex-col text-sm">

        {/* 🏠 MAIN SECTION */}
        <li className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-100 dark:hover:bg-[#272727] cursor-pointer">
          <FiHome className="text-2xl" />
          <span className="font-medium">Home</span>
        </li>
        <li className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-100 dark:hover:bg-[#272727] cursor-pointer">
          <MdOutlineExplore className="text-2xl" />
          <span className="font-medium">Explore</span>
        </li>
        <li className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-100 dark:hover:bg-[#272727] cursor-pointer">
          <MdOutlineSmartDisplay className="text-2xl" />
          <span className="font-medium">Shorts</span>
        </li>
        <li className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-100 dark:hover:bg-[#272727] cursor-pointer">
          <MdSubscriptions className="text-2xl" />
          <span className="font-medium">Subscriptions</span>
        </li>

        <hr className="my-3 border-gray-300 dark:border-[#272727]" />

        {/* 📚 YOU SECTION */}
        <li className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-100 dark:hover:bg-[#272727] cursor-pointer">
          <MdVideoLibrary className="text-2xl" />
          <span className="font-medium">Library</span>
        </li>
        <li className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-100 dark:hover:bg-[#272727] cursor-pointer">
          <MdOutlineHistory className="text-2xl" />
          <span className="font-medium">History</span>
        </li>
        <li className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-100 dark:hover:bg-[#272727] cursor-pointer">
          <FiPlayCircle className="text-2xl" />
          <span className="font-medium">Your Videos</span>
        </li>
        <li className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-100 dark:hover:bg-[#272727] cursor-pointer">
          <MdOutlineWatchLater className="text-2xl" />
          <span className="font-medium">Watch Later</span>
        </li>
        <li className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-100 dark:hover:bg-[#272727] cursor-pointer">
          <FiThumbsUp className="text-2xl" />
          <span className="font-medium">Liked Videos</span>
        </li>

        <hr className="my-3 border-gray-300 dark:border-[#272727]" />

        {/* 🔔 SUBSCRIPTIONS SECTION */}
        <li className="px-3 text-xs uppercase text-gray-500 dark:text-gray-400 mb-2">
          Subscriptions
        </li>

        {/* Channels */}
        {channels.map((channel, i) => (
          <li
            key={i}
            className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-100 dark:hover:bg-[#272727] cursor-pointer"
          >
            <div className="relative w-6 h-6 rounded-full overflow-hidden bg-gray-400">
              <Image
                src={channel.avatar}
                alt={channel.name}
                fill
                className="object-cover"
              />
            </div>
            <span>{channel.name}</span>
          </li>
        ))}

        <hr className="my-3 border-gray-300 dark:border-[#272727]" />

        {/* 🔥 EXPLORE SECTION */}
        <li className="px-3 text-xs uppercase text-gray-500 dark:text-gray-400 mb-2">
          Explore
        </li>

        <li className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-100 dark:hover:bg-[#272727] cursor-pointer">
          <FaFire className="text-xl" />
          <span>Trending</span>
        </li>
        <li className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-100 dark:hover:bg-[#272727] cursor-pointer">
          <IoMdMusicalNotes className="text-xl" />
          <span>Music</span>
        </li>
        <li className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-100 dark:hover:bg-[#272727] cursor-pointer">
          <FaGamepad className="text-xl" />
          <span>Gaming</span>
        </li>
        <li className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-100 dark:hover:bg-[#272727] cursor-pointer">
          <FaFilm className="text-xl" />
          <span>Movies</span>
        </li>
        <li className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-100 dark:hover:bg-[#272727] cursor-pointer">
          <FaTrophy className="text-xl" />
          <span>Sports</span>
        </li>

        <hr className="my-3 border-gray-300 dark:border-[#272727]" />

        {/* ⚙️ SETTINGS */}
        <li className="px-3 text-xs uppercase text-gray-500 dark:text-gray-400 mb-2">
          More from YouTube
        </li>
        <li className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-100 dark:hover:bg-[#272727] cursor-pointer">
          <span className="text-red-600 font-semibold">YouTube Premium</span>
        </li>
        <li className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-100 dark:hover:bg-[#272727] cursor-pointer">
          <span>Live</span>
        </li>

        <hr className="my-3 border-gray-300 dark:border-[#272727]" />

        <p className="text-xs text-gray-500 dark:text-gray-400 px-3 leading-snug">
          About · Press · Copyright <br />
          Contact us · Creators <br />
          Advertise · Developers
        </p>

        <p className="text-xs text-gray-500 dark:text-gray-400 px-3 mt-3 mb-10">
          © 2025 Google LLC
        </p>
      </ul>
    </aside>
  );
}
