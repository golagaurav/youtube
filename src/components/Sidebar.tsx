export default function Sidebar() {
  return (
    <aside className="w-60 bg-white dark:bg-gray-800 p-4 min-h-screen sticky top-0">
      <ul className="flex flex-col gap-2">
        <li className="hover:bg-gray-200 dark:hover:bg-gray-700 p-2 rounded">Home</li>
        <li className="hover:bg-gray-200 dark:hover:bg-gray-700 p-2 rounded">Trending</li>
        <li className="hover:bg-gray-200 dark:hover:bg-gray-700 p-2 rounded">Subscriptions</li>
      </ul>
    </aside>
  );
}
