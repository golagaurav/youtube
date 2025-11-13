'use client';

import {
  FiHome,
  FiCompass,
  FiPlayCircle,
  FiClock,
  FiThumbsUp,
  FiFolder,
} from 'react-icons/fi';
import { MdSubscriptions, MdVideoLibrary } from 'react-icons/md';
import { AiOutlineHistory } from 'react-icons/ai';

export default function Sidebar() {
  return (
    <aside className="w-60 bg-white dark:bg-[#0f0f0f] p-3 min-h-screen sticky top-0 overflow-y-auto scrollbar-hide">
      <ul className="flex flex-col text-sm text-gray-800 dark:text-gray-200">
        {/* --- MAIN SECTION --- */}
        <li className="flex items-center gap-4 hover:bg-gray-100 dark:hover:bg-[#222222] p-2 rounded-lg cursor-pointer">
          <FiHome className="text-xl" />
          <span>Home</span>
        </li>
        <li className="flex items-center gap-4 hover:bg-gray-100 dark:hover:bg-[#222222] p-2 rounded-lg cursor-pointer">
          <FiCompass className="text-xl" />
          <span>Explore</span>
        </li>
        <li className="flex items-center gap-4 hover:bg-gray-100 dark:hover:bg-[#222222] p-2 rounded-lg cursor-pointer">
          <MdSubscriptions className="text-xl" />
          <span>Subscriptions</span>
        </li>

        <hr className="my-3 border-gray-300 dark:border-gray-700" />

        {/* --- LIBRARY SECTION --- */}
        <li className="flex items-center gap-4 hover:bg-gray-100 dark:hover:bg-[#222222] p-2 rounded-lg cursor-pointer">
          <MdVideoLibrary className="text-xl" />
          <span>Library</span>
        </li>
        <li className="flex items-center gap-4 hover:bg-gray-100 dark:hover:bg-[#222222] p-2 rounded-lg cursor-pointer">
          <AiOutlineHistory className="text-xl" />
          <span>History</span>
        </li>
        <li className="flex items-center gap-4 hover:bg-gray-100 dark:hover:bg-[#222222] p-2 rounded-lg cursor-pointer">
          <FiPlayCircle className="text-xl" />
          <span>Your Videos</span>
        </li>
        <li className="flex items-center gap-4 hover:bg-gray-100 dark:hover:bg-[#222222] p-2 rounded-lg cursor-pointer">
          <FiClock className="text-xl" />
          <span>Watch Later</span>
        </li>
        <li className="flex items-center gap-4 hover:bg-gray-100 dark:hover:bg-[#222222] p-2 rounded-lg cursor-pointer">
          <FiThumbsUp className="text-xl" />
          <span>Liked Videos</span>
        </li>

        <hr className="my-3 border-gray-300 dark:border-gray-700" />

        {/* --- SHORTCUT SECTION --- */}
        <li className="text-xs uppercase text-gray-500 dark:text-gray-400 px-2 mb-1">
          Subscriptions
        </li>
        <li className="flex items-center gap-4 hover:bg-gray-100 dark:hover:bg-[#222222] p-2 rounded-lg cursor-pointer">
          <div className="w-6 h-6 rounded-full bg-gray-400"></div>
          <span>Channel 1</span>
        </li>
        <li className="flex items-center gap-4 hover:bg-gray-100 dark:hover:bg-[#222222] p-2 rounded-lg cursor-pointer">
          <div className="w-6 h-6 rounded-full bg-gray-500"></div>
          <span>Channel 2</span>
        </li>
        <li className="flex items-center gap-4 hover:bg-gray-100 dark:hover:bg-[#222222] p-2 rounded-lg cursor-pointer">
          <div className="w-6 h-6 rounded-full bg-gray-600"></div>
          <span>Channel 3</span>
        </li>

        <hr className="my-3 border-gray-300 dark:border-gray-700" />

        <li className="flex items-center gap-4 hover:bg-gray-100 dark:hover:bg-[#222222] p-2 rounded-lg cursor-pointer">
          <FiFolder className="text-xl" />
          <span>Browse Channels</span>
        </li>
      </ul>
    </aside>
  );
}
