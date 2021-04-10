import { motion } from 'framer-motion'
import React from 'react'
import UserBubbleList from './UserBubbleList'

function EventCard({
  img,
  title,
  date,
  Subscriber
}: {
  img: string
  title: string
  date: string
  Subscriber: string[]
}) {
  return (
    <motion.div
      className='flex gap-2 cursor-pointer p-2 rounded-xl'
      initial={{ backgroundColor: '#fff' }}
      animate={{
        backgroundColor: '#fff'
      }}
      whileHover={{ backgroundColor: '#F4FAFF' }}
    >
      <div
        className='w-28 h-24 rounded-xl'
        style={{
          backgroundImage: `url(${img})`,
          backgroundSize: 'cover',
          objectFit: 'cover',
          backgroundPosition: 'center'
        }}
      ></div>
      <div className='flex flex-col justify-between'>
        <div>
          <p className='font-semibold'>{title}</p>
          <p className='text-gray-500 text-xs'>{date}</p>
        </div>
        <div>
          <UserBubbleList userList={Subscriber} size='8' />
        </div>
      </div>
    </motion.div>
  )
}

export default EventCard
