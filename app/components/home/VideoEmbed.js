export default function VideoEmbed() {
  return (
    <div className="flex justify-center items-center mt-12">
      <iframe
        width="1066"
        height="592"
        src="https://www.youtube.com/embed/Qd11MOqQ3mo"
        title="YouTube video"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}
