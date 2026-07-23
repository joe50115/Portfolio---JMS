# audio/

Drop your own legally-owned audio file here, named `track.mp3`, to power
the real audio-reactive visualizer on the Home page
(`src/components/AudioVisualizer.jsx`). It's referenced at `/audio/track.mp3`.

No file here yet? The Play button will show "No track found" and stay
disabled — nothing breaks, the visualizer just won't have anything to play.

This project doesn't ship any audio itself — bring your own file and this
folder is git-ignored-friendly for that reason (add `public/audio/*.mp3` to
`.gitignore` if you don't want to commit it to a public repo).