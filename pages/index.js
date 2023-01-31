import SearchBar from "@/components/SearchBar/SearchBar";
import VideoPlayerAlt2 from "@/components/VideoPlayer/VideoPlayerAlt2";
import useLanguage from "@/hooks/useLanguage";
import useWindowDimensions from "@/hooks/useWindowDimensions";
const text = {
  hero: [
    { language: "es", content: "Mejores transfers en Cancún" },
    { language: "en", content: "Best transfers in Cancún" },
  ],
};
export default function Home() {
  const { translate } = useLanguage();
  const { height } = useWindowDimensions();
  return (
    <>
      <div style={{ height }} className="h-screen">
        <div className="absolute w-full h-full z-[2] bg-gradient-to-t from-[rgba(0,0,0,0.3)] via-[rgba(0,0,0,0.3)] flex items-center justify-center flex-col">
          <p className="text-5xl mb-16 text-white font-semibold text-center px-4">
            {translate(text.hero)}
          </p>
          <SearchBar />
        </div>

        <VideoPlayerAlt2 file="/video.mp4" thumbnail={"/poster.webp"} />
      </div>
    </>
  );
}
