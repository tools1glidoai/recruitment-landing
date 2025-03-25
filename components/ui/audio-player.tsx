"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Play, Pause, SkipBack, SkipForward, Volume2, VolumeX, AlertCircle } from "lucide-react"
import { cn } from "@/lib/utils"

interface AudioPlayerProps {
  src: string
  className?: string
}

export function AudioPlayer({ src, className }: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [duration, setDuration] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)
  const [isMuted, setIsMuted] = useState(false)
  const [volume, setVolume] = useState(0.7)
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const progressBarRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const setAudioData = () => {
      setDuration(audio.duration)
      setIsLoading(false)
    }

    const setAudioTime = () => {
      setCurrentTime(audio.currentTime)
    }

    const handleError = (e: Event) => {
      console.error("Audio error:", e)
      setError("Unable to load audio file. The file may be unavailable or in an unsupported format.")
      setIsLoading(false)
    }

    // Events
    audio.addEventListener("loadeddata", setAudioData)
    audio.addEventListener("timeupdate", setAudioTime)
    audio.addEventListener("ended", () => setIsPlaying(false))
    audio.addEventListener("error", handleError)

    // Set a timeout to check if loading takes too long
    const timeoutId = setTimeout(() => {
      if (isLoading && !duration) {
        setError("Audio file is taking too long to load or may be unavailable.")
        setIsLoading(false)
      }
    }, 5000)

    // Cleanup
    return () => {
      audio.removeEventListener("loadeddata", setAudioData)
      audio.removeEventListener("timeupdate", setAudioTime)
      audio.removeEventListener("ended", () => setIsPlaying(false))
      audio.removeEventListener("error", handleError)
      clearTimeout(timeoutId)
    }
  }, [duration, isLoading])

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume
      audioRef.current.muted = isMuted
    }
  }, [volume, isMuted])

  const togglePlay = () => {
    if (error) return

    try {
      if (isPlaying) {
        audioRef.current?.pause()
      } else {
        const playPromise = audioRef.current?.play()
        if (playPromise) {
          playPromise.catch((err) => {
            console.error("Play error:", err)
            setError("Unable to play audio. The file may be unavailable or in an unsupported format.")
          })
        }
      }
      setIsPlaying(!isPlaying)
    } catch (err) {
      console.error("Toggle play error:", err)
      setError("An error occurred while trying to play the audio.")
    }
  }

  const toggleMute = () => {
    setIsMuted(!isMuted)
  }

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = Number.parseFloat(e.target.value)
    setVolume(newVolume)
    if (newVolume === 0) {
      setIsMuted(true)
    } else {
      setIsMuted(false)
    }
  }

  const skipBackward = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = Math.max(audioRef.current.currentTime - 10, 0)
    }
  }

  const skipForward = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = Math.min(audioRef.current.currentTime + 10, duration)
    }
  }

  const handleProgressChange = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!progressBarRef.current || !audioRef.current || error) return

    const progressBar = progressBarRef.current
    const rect = progressBar.getBoundingClientRect()
    const percent = (e.clientX - rect.left) / rect.width
    audioRef.current.currentTime = percent * duration
  }

  // Format time in MM:SS
  const formatTime = (time: number) => {
    if (isNaN(time)) return "00:00"
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`
  }

  // If there's an error, show error message
  if (error) {
    return (
      <div className={cn("bg-slate-900/70 rounded-lg p-4 border border-slate-800/50", className)}>
        <div className="flex items-center gap-3 text-amber-400 mb-3">
          <AlertCircle size={18} />
          <p className="text-sm font-medium">Audio Playback Issue</p>
        </div>
        <p className="text-slate-300 text-sm">{error}</p>
        <p className="text-slate-400 text-xs mt-2">
          Note: The interview audio transcript is available in the candidate's detailed profile.
        </p>
      </div>
    )
  }

  // If still loading, show loading state
  if (isLoading) {
    return (
      <div className={cn("bg-slate-900/70 rounded-lg p-4 border border-slate-800/50", className)}>
        <div className="flex flex-col items-center justify-center py-2">
          <div className="w-8 h-8 border-2 border-slate-600 border-t-purple-500 rounded-full animate-spin mb-2"></div>
          <p className="text-slate-300 text-sm">Loading audio file...</p>
        </div>
      </div>
    )
  }

  return (
    <div className={cn("bg-slate-900/70 rounded-lg p-4 border border-slate-800/50", className)}>
      <audio ref={audioRef} preload="metadata">
        <source src={src} type="audio/wav" />
        <source src={src} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

      <div className="flex flex-col space-y-2">
        <div
          ref={progressBarRef}
          className="w-full h-2 bg-slate-700/50 rounded-full cursor-pointer relative"
          onClick={handleProgressChange}
        >
          <div
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
            style={{ width: `${(currentTime / duration) * 100}%` }}
          />
        </div>

        <div className="flex justify-between text-xs text-slate-400">
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(duration)}</span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button
              onClick={skipBackward}
              className="text-slate-300 hover:text-white transition-colors"
              disabled={error !== null}
            >
              <SkipBack size={18} />
            </button>

            <button
              onClick={togglePlay}
              className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-full p-2 text-white hover:opacity-90 transition-opacity"
              disabled={error !== null}
            >
              {isPlaying ? <Pause size={18} /> : <Play size={18} />}
            </button>

            <button
              onClick={skipForward}
              className="text-slate-300 hover:text-white transition-colors"
              disabled={error !== null}
            >
              <SkipForward size={18} />
            </button>
          </div>

          <div className="hidden sm:flex items-center space-x-2">
            <button
              onClick={toggleMute}
              className="text-slate-300 hover:text-white transition-colors"
              disabled={error !== null}
            >
              {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
            </button>

            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={volume}
              onChange={handleVolumeChange}
              className="w-20 accent-purple-500"
              disabled={error !== null}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

