export function triggerConfetti() {
  if (typeof window === 'undefined') return

  const canvas = document.createElement('canvas')
  canvas.style.position = 'fixed'
  canvas.style.top = '0'
  canvas.style.left = '0'
  canvas.style.width = '100vw'
  canvas.style.height = '100vh'
  canvas.style.pointerEvents = 'none'
  canvas.style.zIndex = '9999'
  document.body.appendChild(canvas)

  const ctx = canvas.getContext('2d')
  if (!ctx) return

  canvas.width = window.innerWidth
  canvas.height = window.innerHeight

  const colors = ['#e63946', '#f4a261', '#2a9d8f', '#e9c46a', '#9b5de5', '#f15bb5', '#00bbf9']
  const particles: Array<{
    x: number
    y: number
    vx: number
    vy: number
    size: number
    color: string
    rotation: number
    vRot: number
    opacity: number
  }> = []

  const count = 60
  for (let i = 0; i < count; i++) {
    particles.push({
      x: canvas.width / 2,
      y: canvas.height / 2,
      vx: (Math.random() - 0.5) * 16,
      vy: (Math.random() - 0.7) * 18,
      size: Math.random() * 8 + 6,
      color: colors[Math.floor(Math.random() * colors.length)],
      rotation: Math.random() * Math.PI * 2,
      vRot: (Math.random() - 0.5) * 0.2,
      opacity: 1,
    })
  }

  let animationFrameId: number
  let startTime = Date.now()

  const render = () => {
    const elapsed = Date.now() - startTime
    if (elapsed > 2000) {
      if (document.body.contains(canvas)) {
        document.body.removeChild(canvas)
      }
      return
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height)

    particles.forEach((p) => {
      p.x += p.vx
      p.y += p.vy
      p.vy += 0.4 // gravity
      p.rotation += p.vRot
      p.opacity = Math.max(0, 1 - elapsed / 2000)

      ctx.save()
      ctx.globalAlpha = p.opacity
      ctx.translate(p.x, p.y)
      ctx.rotate(p.rotation)
      ctx.fillStyle = p.color
      ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.6)
      ctx.restore()
    })

    animationFrameId = requestAnimationFrame(render)
  }

  render()
}
