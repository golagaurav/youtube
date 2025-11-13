'use client';

import { useState } from 'react';
import { FiMenu, FiSearch, FiBell, FiUser } from 'react-icons/fi';

export default function Navbar({ onMenuToggle }: { onMenuToggle: () => void }) {
  const [query, setQuery] = useState('');

  return (
    <nav className="flex items-center justify-between px-4 py-3 bg-white dark:bg-gray-800 shadow-md sticky top-0 z-50">
      <div className="flex items-center gap-4">
        <FiMenu onClick={onMenuToggle} className="cursor-pointer text-2xl" />
        <h1 className="text-xl font-bold text-red-500">YouTube Clone</h1>
      </div>
      <div className="flex items-center gap-2">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search"
          className="px-3 py-1 border border-gray-300 dark:border-gray-700 rounded-l-md bg-gray-100 dark:bg-gray-700 focus:outline-none"
        />
        <button className="bg-gray-200 dark:bg-gray-700 p-2 rounded-r-md">
          <FiSearch />
        </button>
      </div>
      <div className="flex items-center gap-4">
        <FiBell className="text-xl" />
        <FiUser className="text-xl" />
      </div>
    </nav>
  );
}
