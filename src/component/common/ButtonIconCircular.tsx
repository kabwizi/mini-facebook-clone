import React from 'react'

function ButtonIconCircular({
  icon,
  size = '8',
  bgColor = 'bg-blue-400',
  onClick = Function
}: {
  icon: string
  size?: string
  bgColor?: string
  onClick?: Function
}) {
  return (
    <div
      className={`${bgColor} w-${size} h-${size} rounded-full flex justify-center items-center shadow-md cursor-pointer select-none`}
      onClick={() => onClick()}
    >
      <img className='pt-1' src={icon} alt='' />
    </div>
  )
}

export default ButtonIconCircular
