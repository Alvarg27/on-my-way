import useWindowDimensions from "hooks/useWindowDimensions";
import React, { useEffect, useRef, useState } from "react";

import { IoPlay, IoVolumeHigh, IoVolumeMute } from "react-icons/io5";

const VideoPlayerAlt2 = ({ className, file, thumbnail }) => {
  const isTouch = window.matchMedia("(pointer: coarse)").matches;
  const { width } = useWindowDimensions();
  const [isHovered, setIsHovered] = useState(false);
  const [progressBarHovered, setProgressBarHovered] = useState(false);
  const [progressBarMousePosition, setProgressBarMousePosition] = useState(0);
  const [duration, setDuration] = useState(0);

  const [playing, setPlaying] = useState(false);
  const [playProgress, setPlayProgress] = useState(0);
  const [bufferedProgress, setBufferedProgress] = useState(0);
  const controlBarRef = useRef(null);
  const videoRef = useRef(null);
  const progressBarContainer = useRef(null);

  const pauseVideo = () => {
    videoRef.current.pause();
    setPlaying(false);
  };
  const handleVideoPress = () => {
    if (!playing) {
      startVideo();
    } else {
      pauseVideo();
    }
  };

  const startVideo = () => {
    videoRef.current.play();
    setPlaying(true);
  };

  React.useEffect(() => {
    let timer;
    if (playing) {
      timer = setInterval(
        () => setPlayProgress(videoRef.current?.currentTime || 0),
        1
      );
    }
    if (!playing) {
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [playing]);

  const handler = (e) => {
    if (e.keyCode === 32) {
      //e.preventDefault();
      //if (!playing) {
      //  startVideo();
      //} else {
      //  pauseVideo();
      //}
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handler, false);
    return () => window.removeEventListener("keydown", handler, false);
  }, [playing]);

  useEffect(() => {
    startVideo();
  }, []);

  return (
    <>
      <div
        ref={controlBarRef}
        className="absolute bottom-4 right-4  z-[3]  flex  items-center"
      >
        <div
          onClick={() => {
            if (videoRef?.current?.muted) {
              videoRef.current.muted = false;
            } else {
              videoRef.current.muted = true;
            }
          }}
          className="text-white text-2xl hover:bg-black hover:bg-opacity-10 hover:backdrop-blur-md transition duration-300  cursor-pointer flex items-center justify-center  w-[40px] h-[40px] rounded-lg mr-4"
        >
          {!videoRef?.current?.muted ? <IoVolumeHigh /> : <IoVolumeMute />}
        </div>
        <div className="bg-white bg-opacity-70 backdrop-blur-lg   text-sm w-[70px] flex justify-center rounded-lg h-[40px] items-center">
          <p className="text-blue-500">
            -
            {new Date(
              duration - videoRef?.current?.currentTime * 1000 || duration
            )
              .toISOString()
              .substring(14, 19)}
          </p>
        </div>
      </div>

      <div
        onClick={(e) => {
          if (
            controlBarRef.current &&
            controlBarRef.current.contains(e.target)
          ) {
            return;
          }
          handleVideoPress();
        }}
        onMouseOver={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`w-full mx-auto h-full relative z-[1] overflow-hidden ${className} ${
          width > 1000 ? "" : ""
        }`}
      >
        <div
          className={`w-full absolute h-full z-[1] bg-black bg-opacity-50 flex items-center justify-center transition duration-300  ${
            playing ? "opacity-0" : "opacity-100"
          }`}
        >
          <div
            className={`h-16 w-16 rounded-full border-[2px] border-white flex cursor-pointer `}
          >
            <div className="m-auto text-xl text-white relative">
              {<IoPlay />}
            </div>
          </div>
        </div>

        <video
          onDurationChange={(e) => {
            setDuration(e?.target?.duration * 1000);
          }}
          onProgress={(e) => {
            if (e.target?.buffered?.length >= 1) {
              setBufferedProgress(e.target?.buffered?.end(0));
            }
          }}
          className="m-auto cursor-pointer w-full h-full object-cover relative"
          playsInline
          muted
          loop
          ref={videoRef}
          preload="metadata"
          poster={thumbnail}
        >
          <source src={file} />
        </video>
      </div>
    </>
  );
};

export default VideoPlayerAlt2;
