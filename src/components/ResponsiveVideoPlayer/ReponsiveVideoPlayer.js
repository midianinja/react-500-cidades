import React from "react";
import { VideoWrapper, Frame } from "./ResponsiveVideoPlayer.styled";

const Player = () => {
  return (
    <VideoWrapper>
      <Frame
        src="https://www.youtube.com/embed/R86wxpQGKMY?loop=1&controls=0&playlist=R86wxpQGKMY"
        frameBorder="0"
        autoplay
        controls={0}
      />
    </VideoWrapper>
  );
};

export default Player;