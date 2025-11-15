// src/lib/youtubeApi.ts
const API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;
const BASE_URL = 'https://www.googleapis.com/youtube/v3';

export interface Video {
  id: { videoId: string };
  snippet: {
    title: string;
    description: string;
    thumbnails: { medium: { url: string } };
    channelTitle: string;
  };
}

// Fetch videos by search query
export async function fetchVideos(query: string) {
  const res = await fetch(
    `${BASE_URL}/search?part=snippet&q=${query}&key=${API_KEY}&maxResults=20`
  );
  const data = await res.json();
  return data.items;
}

// Fetch videos from a specific channel
export async function fetchChannelVideos(channelName: string) {
  // First, get the channel ID
  const channelRes = await fetch(
    `${BASE_URL}/search?part=snippet&type=channel&q=${channelName}&key=${API_KEY}`
  );
  const channelData = await channelRes.json();
  const channelId = channelData.items[0]?.id.channelId;

  if (!channelId) return [];

  // Then fetch videos from that channel
  const videosRes = await fetch(
    `${BASE_URL}/search?part=snippet&channelId=${channelId}&maxResults=20&order=date&key=${API_KEY}`
  );
  const videosData = await videosRes.json();
  return videosData.items;
}
