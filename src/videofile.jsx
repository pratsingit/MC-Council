import React from 'react';
import videoSource from './hey.mp4';;

const VideoPlayer = () => {
  return (
    <div>
      <h2>Local Video Player</h2>
      <video width="640" height="360" controls>
        <source src = {videoSource} type="video/mp4" />
      </video>
    </div>
  );
};

export default VideoPlayer;