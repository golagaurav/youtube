interface VideoPageProps {
  params: { id: string };
}

export default async function VideoPage({ params }: VideoPageProps) {
  const videoId = params.id;

  return (
    <div className="p-4">
      <iframe
        className="w-full aspect-video rounded-lg"
        src={`https://www.youtube.com/embed/${videoId}`}
        allowFullScreen
      ></iframe>
      <h2 className="mt-4 text-lg font-bold">Video ID: {videoId}</h2>
    </div>
  );
}
