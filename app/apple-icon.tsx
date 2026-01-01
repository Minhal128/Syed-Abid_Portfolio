import { ImageResponse } from 'next/og'
 
// Route segment config
export const runtime = 'edge'
 
// Image metadata
export const size = {
  width: 180,
  height: 180,
}
export const contentType = 'image/png'
 
// Image generation
export default function AppleIcon() {
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #15803d 0%, #166534 100%)',
          borderRadius: '40px',
          fontSize: '100px',
          fontWeight: '900',
          color: 'white',
          fontFamily: 'Arial, sans-serif',
        }}
      >
        SAH
      </div>
    ),
    {
      width: size.width,
      height: size.height,
    }
  )
}
