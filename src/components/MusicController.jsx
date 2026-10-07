// src/components/MusicController.jsx
import { useEffect, useState } from 'react';
import { Music, Pause } from 'lucide-react';

/**
 * Floating circular music controller — HIDDEN VERSION.
 * The music still plays/pauses based on the audio element, but nothing is shown.
 */
const MusicController = ({ audioRef }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef?.current;
    if (!audio) return;

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    audio.addEventListener('play', handlePlay);
    audio.addEventListener('pause', handlePause);

    if (!audio.paused) setIsPlaying(true);

    return () => {
      audio.removeEventListener('play', handlePlay);
      audio.removeEventListener('pause', handlePause);
    };
  }, [audioRef]);

  // ✅ Rendering nothing — but audio still works via the parent
  return null;
};

export default MusicController;