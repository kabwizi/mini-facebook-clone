import React from 'react'

function Message({
  direction,
  text,
  date
}: {
  direction: 'LEFT' | 'RIGTH'
  text: string
  date: string
}) {
  return (
    <div
      className={` flex w-full ${
        direction === 'LEFT' ? 'justify-start' : 'justify-end'
      }`}
    >
      <div
        className={`${
          direction === 'LEFT' ? 'bg-white' : 'bg-blue-300'
        } p-3 rounded-b-2xl rounded-t${
          direction === 'LEFT' ? 'r' : 'l'
        }-2xl w-60 shadow`}
      >
        <p className={`${direction === 'LEFT' ? 'text-black' : 'text-white'} `}>
          {text}
        </p>
        <p
          className={`${
            direction === 'LEFT' ? 'text-gray-400' : 'text-white'
          } text-xs`}
        >
          {date}
        </p>
      </div>
    </div>
  )
}

export default Message
