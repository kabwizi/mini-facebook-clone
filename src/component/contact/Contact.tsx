import { motion } from 'framer-motion'
import React from 'react'
import ButtonIconCircular from '../common/ButtonIconCircular'
import CircularAvatar from '../common/CircularAvatar'

function Contact({
  type,
  img,
  active,
  fullName
}: {
  type: 'CONTACT' | 'SUGGESTION'
  img: string
  active: boolean
  fullName: string
}) {
  return (
    <motion.div
      initial={{ backgroundColor: '#fff' }}
      animate={{ backgroundColor: '#fff' }}
      whileHover={{ backgroundColor: '#F4FAFF' }}
      className='flex justify-between items-center cursor-pointer py-2 px-2 rounded-xl'
    >
      <div className='flex gap-4 flex-1'>
        <CircularAvatar img={img} size='12' />
        <div className='flex flex-col justify-center'>
          <p className='font-semibold'>{fullName}</p>
          <div className='flex items-center gap-2'>
            <div
              className={`${
                active ? 'bg-green-400' : 'bg-gray-200'
              } w-2 h-2 rounded-full`}
            ></div>
            <p className='text-xs text-gray-500'>
              {active ? 'Online' : 'Offline'}
            </p>
          </div>
        </div>
      </div>
      {type === 'CONTACT' ? (
        <ButtonIconCircular icon='./icon/message.svg' size='10' />
      ) : (
        <p className='text-xs font-semibold mr-2'>Follow</p>
      )}
    </motion.div>
  )
}

export default Contact
