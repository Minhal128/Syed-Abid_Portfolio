import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const size = {
  width: 64,
  height: 64,
}
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#4a2020',
          borderRadius: '8px',
        }}
      >
        <svg
          width="68"
          height="68"
          viewBox="0 0 100 100"
          fill="none"
        >
          <text
            x="50"
            y="65"
            textAnchor="middle"
            fontSize="40"
            fontWeight="900"
            fontFamily="Arial Black, Arial, sans-serif"
            fill="white"
          >
            SA
          </text>
        </svg>
      </div>
    ),
    {
      ...size,
    }
  )
}
