import { useState } from "react";
import ReactAudioPlayer from "react-audio-player";
import PropTypes from "prop-types";

const AudioPlayer = ({ audioSrc }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div>
      <ReactAudioPlayer
        src={audioSrc}
        autoPlay={false}
        controls
        onPlay={togglePlay}
        onPause={togglePlay}
      />
      <p>{isPlaying ? "Playing" : "Paused"}</p>
    </div>
  );
};

AudioPlayer.propTypes = {
  audioSrc: PropTypes.string.isRequired,
};

export default AudioPlayer;
