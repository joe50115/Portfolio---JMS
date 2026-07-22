import { useEffect, useRef, useState } from "react";

const BAR_COUNT = 64;
// Drop your own legally-owned track here as public/audio/track.mp3 — see
// public/audio/README.md. Nothing ships with this project by default.
const AUDIO_SRC = "/audio/track.mp3";

// Cyan equalizer bars. Idle, they run a decorative CSS pulse (no audio
// needed). Press Play and — if a track exists at AUDIO_SRC — the Web Audio
// API takes over: an AnalyserNode reads real frequency data from playback
// each frame and drives the bar heights directly, then hands control back
// to the CSS animation on pause/stop.
function AudioVisualizer() {
  const audioRef = useRef(null);
  const barRefs = useRef([]);
  const audioCtxRef = useRef(null);
  const analyserRef = useRef(null);
  const rafRef = useRef(null);

  const [playing, setPlaying] = useState(false);
  const [available, setAvailable] = useState(true);

  function ensureAudioGraph() {
    if (audioCtxRef.current) return;

    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    const ctx = new AudioCtx();
    const analyser = ctx.createAnalyser();
    analyser.fftSize = BAR_COUNT * 2;

    const source = ctx.createMediaElementSource(audioRef.current);
    source.connect(analyser);
    analyser.connect(ctx.destination);

    audioCtxRef.current = ctx;
    analyserRef.current = analyser;
  }

  function draw() {
    const analyser = analyserRef.current;
    if (!analyser) return;

    const data = new Uint8Array(analyser.frequencyBinCount);
    analyser.getByteFrequencyData(data);

    barRefs.current.forEach((bar, i) => {
      if (!bar) return;
      const value = Math.max(data[i] / 255, 0.05);
      bar.style.transform = `scaleY(${value})`;
      bar.style.opacity = Math.max(value, 0.35);
    });

    rafRef.current = requestAnimationFrame(draw);
  }

  async function togglePlay() {
    if (!available) return;

    ensureAudioGraph();
    if (audioCtxRef.current.state === "suspended") {
      await audioCtxRef.current.resume();
    }

    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
      cancelAnimationFrame(rafRef.current);
      return;
    }

    try {
      await audioRef.current.play();
      setPlaying(true);
      draw();
    } catch {
      setAvailable(false);
    }
  }

  useEffect(() => {
    return () => {
      cancelAnimationFrame(rafRef.current);
      audioCtxRef.current?.close();
    };
  }, []);

  return (
    <div className="audio-visualizer-wrap">
      <audio ref={audioRef} src={AUDIO_SRC} loop onError={() => setAvailable(false)} />

      <div className={`audio-visualizer${playing ? " is-live" : ""}`} aria-hidden="true">
        {Array.from({ length: BAR_COUNT }, (_, i) => (
          <span key={i} ref={(el) => (barRefs.current[i] = el)} className="viz-bar" />
        ))}
      </div>

      <button type="button" className="viz-toggle" onClick={togglePlay} disabled={!available}>
        {!available ? "No track found — add public/audio/track.mp3" : playing ? "Pause" : "Play"}
      </button>
    </div>
  );
}

export default AudioVisualizer;
