import React, { useEffect, useRef } from 'react'

export function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationId: number
    let width = (canvas.width = window.innerWidth)
    let height = (canvas.height = window.innerHeight)

    const handleResize = () => {
      if (!canvas) return
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
    }

    window.addEventListener('resize', handleResize)

    const particles: Array<{
      x: number
      y: number
      r: number
      color: string
      vx: number
      vy: number
      pulse: number
    }> = []

    const colors = [
      'rgba(144, 24, 18, 0.35)', // Vermelho UFV #901812
      'rgba(209, 167, 5, 0.35)', // Dourado/Amarelo UFV #D1A705
      'rgba(192, 57, 43, 0.3)', // Vermelho claro/terroso
      'rgba(244, 162, 97, 0.25)', // Tom terroso/dourado suave
      'rgba(51, 51, 51, 0.4)', // Preto UFV #333333
    ]

    for (let i = 0; i < 25; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 8 + 3,
        color: colors[Math.floor(Math.random() * colors.length)],
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        pulse: Math.random() * Math.PI * 2,
      })
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height)

      particles.forEach((p) => {
        p.x += p.vx
        p.y += p.vy
        p.pulse += 0.02

        if (p.x < 0) p.x = width
        if (p.x > width) p.x = 0
        if (p.y < 0) p.y = height
        if (p.y > height) p.y = 0

        const currentR = p.r + Math.sin(p.pulse) * 1.5

        ctx.beginPath()
        ctx.arc(p.x, p.y, Math.max(1, currentR), 0, Math.PI * 2)
        ctx.fillStyle = p.color
        ctx.shadowBlur = 12
        ctx.shadowColor = p.color
        ctx.fill()
        ctx.shadowBlur = 0
      })

      animationId = requestAnimationFrame(render)
    }

    render()

    return () => {
      window.removeEventListener('resize', handleResize)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0 opacity-70" />
}
