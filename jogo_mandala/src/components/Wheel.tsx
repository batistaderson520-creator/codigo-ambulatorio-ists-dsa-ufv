import React from 'react'
import { WHEEL_SEGMENTS, WheelSegment } from '@/data/gameData'

interface WheelProps {
  rotation: number
  isSpinning: boolean
  onSpin: () => void
  disabled?: boolean
  selectedSegmentIndex?: number | null
}

export function Wheel({
  rotation,
  isSpinning,
  onSpin,
  disabled = false,
  selectedSegmentIndex = null,
}: WheelProps) {
  const segments = WHEEL_SEGMENTS
  const total = segments.length
  const anglePerSegment = 360 / total

  return (
    <div className="relative w-full max-w-[340px] sm:max-w-[400px] aspect-square mx-auto flex flex-col items-center justify-center select-none py-2">
      {/* Outer Glow / Ring Container */}
      <div className="relative w-full h-full flex items-center justify-center">
        {/* Top Pointer Needle (UFV Dourado & Vermelho) */}
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center filter drop-shadow-[0_4px_8px_rgba(0,0,0,0.6)]">
          <div className="w-0 h-0 border-l-[14px] border-l-transparent border-r-[14px] border-r-transparent border-t-[28px] border-t-[#D1A705]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#901812] -mt-5 border-2 border-white shadow-sm" />
        </div>

        {/* SVG Wheel with CSS rotation */}
        <svg viewBox="0 0 400 400" className="w-full h-full drop-shadow-2xl overflow-visible">
          <defs>
            <radialGradient id="centerGradient" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#D1A705" />
              <stop offset="60%" stopColor="#901812" />
              <stop offset="100%" stopColor="#4a0805" />
            </radialGradient>
            <filter id="spinGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Outer Border Rim */}
          <circle
            cx="200"
            cy="200"
            r="192"
            fill="none"
            stroke="#D1A705"
            strokeWidth="6"
            className="opacity-90"
          />
          <circle
            cx="200"
            cy="200"
            r="197"
            fill="none"
            stroke="#901812"
            strokeWidth="3"
            className="opacity-60"
          />

          {/* Rotating Wheel Group */}
          <g
            style={{
              transformOrigin: '200px 200px',
              transform: `rotate(${rotation}deg)`,
              transition: isSpinning
                ? 'transform 2.4s cubic-bezier(0.18, 0.89, 0.32, 1.02)'
                : 'transform 0.3s ease-out',
            }}
          >
            {segments.map((seg: WheelSegment, i: number) => {
              const startAngle = i * anglePerSegment - 90
              const endAngle = (i + 1) * anglePerSegment - 90
              const midAngle = startAngle + anglePerSegment / 2

              const r = 186
              const startRad = (startAngle * Math.PI) / 180
              const endRad = (endAngle * Math.PI) / 180

              const x1 = 200 + r * Math.cos(startRad)
              const y1 = 200 + r * Math.sin(startRad)
              const x2 = 200 + r * Math.cos(endRad)
              const y2 = 200 + r * Math.sin(endRad)

              const pathData = `M 200 200 L ${x1} ${y1} A ${r} ${r} 0 0 1 ${x2} ${y2} Z`

              // Calculate text placement
              const textRad = (midAngle * Math.PI) / 180
              const textR = 125
              const tx = 200 + textR * Math.cos(textRad)
              const ty = 200 + textR * Math.sin(textRad)

              // Text angle: rotated along the radius
              let textRotation = midAngle + 90
              if (textRotation > 90 && textRotation < 270) {
                textRotation += 180
              }

              const isHighlighted = selectedSegmentIndex === i

              return (
                <g key={seg.id}>
                  {/* Segment Pie slice */}
                  <path
                    d={pathData}
                    fill={seg.color}
                    stroke="#16283C"
                    strokeWidth="2.5"
                    style={{
                      filter: isHighlighted ? 'brightness(1.2)' : undefined,
                      transition: 'all 0.3s ease',
                    }}
                  />

                  {/* Segment Text */}
                  <text
                    x={tx}
                    y={ty}
                    fill={seg.textColor}
                    textAnchor="middle"
                    dominantBaseline="central"
                    transform={`rotate(${textRotation}, ${tx}, ${ty})`}
                    className="font-bold text-[11px] sm:text-[12px] pointer-events-none select-none tracking-wider"
                    style={{
                      fontFamily: 'Bricolage Grotesque, Archivo, sans-serif',
                      fontWeight: 800,
                      filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.7))',
                    }}
                  >
                    {seg.label}
                  </text>
                </g>
              )
            })}
          </g>

          {/* Central Hub Button / Spin Center */}
          <circle
            cx="200"
            cy="200"
            r="46"
            fill="url(#centerGradient)"
            stroke="#FFFFFF"
            strokeWidth="3.5"
            className="filter drop-shadow-lg"
          />

          <circle cx="200" cy="200" r="38" fill="#901812" stroke="#D1A705" strokeWidth="2" />
        </svg>

        {/* Center Spin Clickable Button overlay */}
        <button
          type="button"
          disabled={disabled || isSpinning}
          onClick={onSpin}
          className={`absolute z-20 w-20 h-20 rounded-full flex flex-col items-center justify-center font-extrabold text-white text-xs sm:text-sm tracking-wider uppercase transition-transform active:scale-95 ${
            disabled || isSpinning
              ? 'cursor-not-allowed opacity-90'
              : 'hover:scale-105 shadow-xl cursor-pointer'
          }`}
          style={{ fontFamily: 'Bricolage Grotesque, sans-serif' }}
        >
          <span className="text-[#D1A705] font-black text-sm sm:text-base leading-tight">
            {isSpinning ? '...' : 'GIRAR'}
          </span>
          <span className="text-[9px] text-white/80 font-normal">
            {isSpinning ? 'Sorteando' : 'Roleta'}
          </span>
        </button>
      </div>

      {/* Helper text under wheel */}
      <div className="text-center mt-3">
        <p className="text-xs text-[#94AEC6] font-medium">
          {isSpinning
            ? 'Sorteando pergunta de Prevenção Combinada...'
            : 'Clique em GIRAR para sortear a próxima pergunta!'}
        </p>
      </div>
    </div>
  )
}
