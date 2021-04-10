import React from 'react'

function CircularAvatar({ img, size }: { img: string; size: string }) {
  return (
    <div className={`rounded-full h-${size} w-${size} overflow-hidden`}>
      <img
        className='w-full h-full object-cover select-none'
        src={img}
        alt=''
      />
    </div>
  )
}

export default CircularAvatar
