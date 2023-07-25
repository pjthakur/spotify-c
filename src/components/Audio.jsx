import React, { useState, useRef } from 'react';
import more from '../assets/details.png'
import back from '../assets/backward.png'
import forw from '../assets/forward.png'
import play from '../assets/play.png'
import pause from '../assets/pause1.jpg'
import speaker from '../assets/speaker.png'
import '../styles/currsong.css'

const Audio = ({ url }) => {
  const [volume, setVolume] = useState(1); // 1 represents full volume
  const minVolume = 0;
  const maxVolume = 1;
  

  const audioRef = useRef(null); // Reference to the audio element
  const [isPlaying, setIsPlaying] = useState(false); // State to manage play/pause
  const [progress, setProgress] = useState(0);
  const [currentSong, setCurrentSong] = useState(null);

  // Function to toggle play/pause
  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }

    setIsPlaying(!isPlaying);
  };

  const handleVolumeChange = (event) => {
    const newVolume = parseFloat(event.target.value);
    setVolume(newVolume);
  };

  const handleProgressClick = (event) => {
    // Get the clicked position on the progress bar
    const clickPosition = event.clientX;
    const bar = document.querySelector('.progress-bar-container');
    const barStart = bar.getBoundingClientRect().left;
    const barWidth = bar.clientWidth;
    const clickedPoint = clickPosition - barStart;

    // Calculate the new progress based on the clicked point
    const newProgress = (clickedPoint / barWidth) * 100;
    setProgress(newProgress);

    // Calculate the new time in seconds
    const audioDuration = audioRef.current.duration;
    const newTime = (clickedPoint / barWidth) * audioDuration;

    // Set the new current time of the audio
    audioRef.current.currentTime = newTime;
  };

  const control = isPlaying ? pause : play;

  return (
    <div>
      {/* Audio element with the source */}
      <audio
        ref={audioRef}
        src={url}
        onTimeUpdate={() => {
          setProgress((audioRef.current.currentTime / audioRef.current.duration) * 100);
        }}
        volume={volume}
        autoPlay
      />
      <div className="progress-bar-container" onClick={handleProgressClick}>
        <div className="progress-bar" style={{ width: `${progress}%` }}></div>
      </div>
      <div className='player-controls'>
        <div className='more-button'>
          <img src={more} alt='more-button' />
        </div>
        <div className='main-controls'>
          <div className='back-button'><img src={back} alt='back-button' /></div>
          <div className='play-button'><img src={control} alt='play-button' onClick={handlePlayPause} />
          </div>
          <div className='back-button'><img src={forw} alt='forw-button' /></div>
        </div>
        <div className='more-button'>
          <img src={speaker} alt='speaker-button' />
        </div>
      </div>
    </div>
  );
};

export default Audio;
