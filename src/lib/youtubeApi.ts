// src/lib/youtubeApi.ts
const API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;
const BASE_URL = 'https://www.googleapis.com/youtube/v3';

// Define the Video interface to provide type information for the video data
export interface Video {
  id: { videoId: string };
  snippet: {
    title: string;
    description: string;
    thumbnails: { medium: { url: string } };
    channelTitle: string;
  };
}

// The fetchVideos function returns a list of Video objects
export async function fetchVideos(query: string): Promise<Video[]> {
  const res = await fetch(
    `${BASE_URL}/search?part=snippet&q=${query}&key=${API_KEY}&maxResults=20&type=video`
  );

  if (!res.ok) {
    throw new Error('Failed to fetch videos from YouTube API');
  }

  const data = await res.json();
  return data.items;
}
