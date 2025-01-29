export default function VideoEmbed() {
  return (
    <div className="flex justify-center items-center mt-12">
      <iframe
        className="w-[330px] h-[183px] md:w-[1066px] md:h-[592px] rounded-lg"
        src="https://www.youtube.com/embed/Qd11MOqQ3mo"
        title="YouTube video"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}
