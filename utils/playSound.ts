let hoverAudio : HTMLAudioElement | null = null;

export const playHoverSound = () => {
    if (!hoverAudio) {
        hoverAudio = new Audio('/sounds/cleanedIconHover.mp3');
    }

    hoverAudio.currentTime = 0;
    hoverAudio.play().catch((e) => {console.warn("Failed to play audio", e)});
}

export const stopHoverSound = () => {
  if (hoverAudio) {
    hoverAudio.pause();
    hoverAudio.currentTime = 0;
    }
}