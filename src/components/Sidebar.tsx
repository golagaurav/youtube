'use client';

import Image from 'next/image';
import { IconType } from 'react-icons';

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


const mainLinks = [
  { label: 'Home', icon: FiHome },
  { label: 'Explore', icon: MdOutlineExplore },
  { label: 'Shorts', icon: MdOutlineSmartDisplay },
  { label: 'Subscriptions', icon: MdSubscriptions },
];

const youLinks = [
  { label: 'Library', icon: MdVideoLibrary },
  { label: 'History', icon: MdOutlineHistory },
  { label: 'Your Videos', icon: FiPlayCircle },
  { label: 'Watch Later', icon: MdOutlineWatchLater },
  { label: 'Liked Videos', icon: FiThumbsUp },
];

const exploreLinks = [
  { label: 'Trending', icon: FaFire },
  { label: 'Music', icon: IoMdMusicalNotes },
  { label: 'Gaming', icon: FaGamepad },
  { label: 'Movies', icon: FaFilm },
  { label: 'Sports', icon: FaTrophy },
];

const channels = [
  { name: 'MrBeast', avatar: 'https://i.pravatar.cc/40?img=1' },
  { name: 'T-Series', avatar: 'https://i.pravatar.cc/40?img=2' },
  { name: 'TechBurner', avatar: 'https://i.pravatar.cc/40?img=3' },
  { name: 'Fireship', avatar: 'https://i.pravatar.cc/40?img=4' },
];


function SidebarItem({
  icon: Icon,
  label,
}: {
  icon: IconType;
  label: string;
}) {
  return (
    <li className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-100 dark:hover:bg-[#272727] cursor-pointer">
      <Icon className="text-2xl" />
      <span className="font-medium">{label}</span>
    </li>
  );
}

function SectionTitle({ title }: { title: string }) {
  return (
    <li className="px-3 text-xs uppercase text-gray-500 dark:text-gray-400 mb-2">
      {title}
    </li>
  );
}

function Divider() {
  return <hr className="my-3 border-gray-300 dark:border-[#272727]" />;
}

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white dark:bg-[#0f0f0f] text-gray-900 dark:text-white min-h-screen sticky top-0 overflow-y-auto scrollbar-hide">
      <ul className="flex flex-col text-sm">

        {mainLinks.map((item) => (
          <SidebarItem key={item.label} {...item} />
        ))}

        <Divider />

        {youLinks.map((item) => (
          <SidebarItem key={item.label} {...item} />
        ))}

        <Divider />

        <SectionTitle title="Subscriptions" />

        {channels.map((channel) => (
          <li
            key={channel.name}
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

        <Divider />

        <SectionTitle title="Explore" />

        {exploreLinks.map((item) => (
          <SidebarItem key={item.label} {...item} />
        ))}

        <Divider />

        <SectionTitle title="More from YouTube" />

        <li className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-100 dark:hover:bg-[#272727] cursor-pointer">
          <span className="text-red-600 font-semibold">YouTube Premium</span>
        </li>
        <li className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-100 dark:hover:bg-[#272727] cursor-pointer">
          <span>Live</span>
        </li>

        <Divider />

        <p className="text-xs text-gray-500 dark:text-gray-400 px-3 leading-snug">
          About · Press · Copyright 
        <br />Contact us · Creators <br />
          Advertise · Developers</p>

        <p className="text-xs text-gray-500 dark:text-gray-400 px-3 mt-3 mb-10">
          © 2025
        </p>
      </ul>
    </aside>
  );
}
