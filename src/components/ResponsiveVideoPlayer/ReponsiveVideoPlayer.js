import React from "react";
import { VideoWrapper } from "./ResponsiveVideoPlayer.styled";

const Player = () => {
  return (
    <VideoWrapper>
      <iframe
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%"
        }}
        src="https://www.youtube.com/embed/SDb_k5GTKuw"
        frameBorder="0"
        autoplay
      />
    </VideoWrapper>
  );
};

export default Player;