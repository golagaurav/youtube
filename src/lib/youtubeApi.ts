const API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;
const BASE_URL = 'https://www.googleapis.com/youtube/v3';

export async function fetchVideos(query: string) {
  const res = await fetch(
    `${BASE_URL}/search?part=snippet&q=${query}&key=${API_KEY}&maxResults=20`
  );
  const data = await res.json();
  return data.items;
}
