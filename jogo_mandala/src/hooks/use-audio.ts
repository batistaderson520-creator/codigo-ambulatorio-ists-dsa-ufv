import { useState, useEffect, useCallback, useRef } from 'react'

export function useAudio() {
  const [muted, setMuted] = useState<boolean>(() => {
    return localStorage.getItem('mandala_audio_muted') === 'true'
  })

  const audioCtxRef = useRef<AudioContext | null>(null)

  const getAudioContext = useCallback(() => {
    if (!audioCtxRef.current && typeof window !== 'undefined') {
      const AudioCtx =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext
      if (AudioCtx) {
        audioCtxRef.current = new AudioCtx()
      }
    }
    if (audioCtxRef.current && audioCtxRef.current.state === 'suspended') {
      audioCtxRef.current.resume()
    }
    return audioCtxRef.current
  }, [])

  const toggleMute = useCallback(() => {
    setMuted((prev) => {
      const next = !prev
      localStorage.setItem('mandala_audio_muted', String(next))
      return next
    })
  }, [])

  const playSpinTick = useCallback(() => {
    if (muted) return
    const ctx = getAudioContext()
    if (!ctx) return
    try {
      const osc = ctx.createOscillator()
      const gain = ctx.createGain()
      osc.type = 'triangle'
      osc.frequency.setValueAtTime(400 + Math.random() * 200, ctx.currentTime)
      gain.gain.setValueAtTime(0.08, ctx.currentTime)
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.05)
      osc.connect(gain)
      gain.connect(ctx.destination)
      osc.start()
      osc.stop(ctx.currentTime + 0.05)
    } catch {
      /* intentionally ignored */
    }
  }, [muted, getAudioContext])

  const playCorrectSound = useCallback(() => {
    if (muted) return
    const ctx = getAudioContext()
    if (!ctx) return
    try {
      const now = ctx.currentTime
      const osc1 = ctx.createOscillator()
      const osc2 = ctx.createOscillator()
      const gain = ctx.createGain()

      osc1.type = 'sine'
      osc2.type = 'triangle'

      osc1.frequency.setValueAtTime(523.25, now) // C5
      osc1.frequency.setValueAtTime(659.25, now + 0.1) // E5
      osc1.frequency.setValueAtTime(783.99, now + 0.2) // G5
      osc1.frequency.setValueAtTime(1046.5, now + 0.3) // C6

      osc2.frequency.setValueAtTime(261.63, now)
      osc2.frequency.setValueAtTime(329.63, now + 0.1)

      gain.gain.setValueAtTime(0.15, now)
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.5)

      osc1.connect(gain)
      osc2.connect(gain)
      gain.connect(ctx.destination)

      osc1.start(now)
      osc2.start(now)
      osc1.stop(now + 0.5)
      osc2.stop(now + 0.5)
    } catch {
      /* intentionally ignored */
    }
  }, [muted, getAudioContext])

  const playWrongSound = useCallback(() => {
    if (muted) return
    const ctx = getAudioContext()
    if (!ctx) return
    try {
      const now = ctx.currentTime
      const osc = ctx.createOscillator()
      const gain = ctx.createGain()

      osc.type = 'sawtooth'
      osc.frequency.setValueAtTime(180, now)
      osc.frequency.exponentialRampToValueAtTime(110, now + 0.3)

      gain.gain.setValueAtTime(0.2, now)
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35)

      osc.connect(gain)
      gain.connect(ctx.destination)

      osc.start(now)
      osc.stop(now + 0.35)
    } catch {
      /* intentionally ignored */
    }
  }, [muted, getAudioContext])

  const playFanfare = useCallback(() => {
    if (muted) return
    const ctx = getAudioContext()
    if (!ctx) return
    try {
      const now = ctx.currentTime
      const notes = [440, 554.37, 659.25, 880]
      notes.forEach((freq, idx) => {
        const osc = ctx.createOscillator()
        const gain = ctx.createGain()
        osc.type = 'sine'
        osc.frequency.setValueAtTime(freq, now + idx * 0.12)
        gain.gain.setValueAtTime(0.12, now + idx * 0.12)
        gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.12 + 0.4)
        osc.connect(gain)
        gain.connect(ctx.destination)
        osc.start(now + idx * 0.12)
        osc.stop(now + idx * 0.12 + 0.4)
      })
    } catch {
      /* intentionally ignored */
    }
  }, [muted, getAudioContext])

  return {
    muted,
    toggleMute,
    playSpinTick,
    playCorrectSound,
    playWrongSound,
    playFanfare,
  }
}
