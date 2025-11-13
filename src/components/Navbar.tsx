'use client';

import { useState } from 'react';
import { FiMenu, FiSearch, FiBell, FiUser, FiMic, FiVideo } from 'react-icons/fi';
import Image from 'next/image';

export default function Navbar({ onMenuToggle }: { onMenuToggle: () => void }) {
  const [query, setQuery] = useState('');

  return (
    <nav className="flex items-center justify-between px-4 py-2 bg-white dark:bg-[#0f0f0f] shadow-sm sticky top-0 z-50">
      {/* LEFT SECTION */}
      <div className="flex items-center gap-4">
        <FiMenu
          onClick={onMenuToggle}
          className="cursor-pointer text-2xl text-gray-800 dark:text-white"
        />
        <div className="flex items-center cursor-pointer">
          <Image
            src="/youtube-logo.png" // 👈 put your YouTube logo image here (red play icon)
            alt="YouTube"
            width={90}
            height={20}
            priority
          />
          <sup className="text-xs ml-1 text-gray-500 dark:text-gray-400">IN</sup>
        </div>
      </div>

      {/* CENTER SECTION */}
      <div className="flex items-center flex-1 justify-center max-w-xl">
        <div className="flex items-center w-full max-w-lg">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search"
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-l-full bg-transparent focus:outline-none text-sm text-gray-900 dark:text-white"
          />
          <button className="px-4 py-2 bg-gray-100 dark:bg-[#222222] border border-gray-300 dark:border-gray-700 rounded-r-full hover:bg-gray-200 dark:hover:bg-[#333333]">
            <FiSearch className="text-gray-700 dark:text-gray-300 text-lg" />
          </button>
        </div>
        <button className="ml-3 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-[#222222]">
          <FiMic className="text-xl text-gray-800 dark:text-white" />
        </button>
      </div>

      {/* RIGHT SECTION */}
      <div className="flex items-center gap-4">
        <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-[#222222]">
          <FiVideo className="text-xl text-gray-800 dark:text-white" />
        </button>
        <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-[#222222] relative">
          <FiBell className="text-xl text-gray-800 dark:text-white" />
          <span className="absolute top-1 right-1 bg-red-600 text-white text-[10px] px-1 rounded-full">
            3
          </span>
        </button>
        <div className="w-8 h-8 rounded-full bg-gray-300 dark:bg-gray-600 flex items-center justify-center cursor-pointer">
          <FiUser className="text-lg text-gray-800 dark:text-white" />
        </div>
      </div>
    </nav>
  );
}
