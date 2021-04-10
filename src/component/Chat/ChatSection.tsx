import { motion } from 'framer-motion'
import React, { useState } from 'react'
import ButtonIconCircular from '../common/ButtonIconCircular'
import CircularAvatar from '../common/CircularAvatar'
import Message from './Message'

function ChatSection() {
  const [minifyScreen, setMinifyScreen] = useState(false)
  return (
    <motion.div
      initial={{ width: '380px', height: '0px' }}
      animate={{ height: minifyScreen ? '48px' : '500px' }}
      className='bg-gray-50 rounded-3xl fixed bottom-5 right-5  shadow-2xl overflow-hidden flex flex-col'
    >
      <div className='bg-white px-2 py-1 rounded-b-3xl flex justify-between items-center shadow'>
        <div className='flex items-center gap-4'>
          <CircularAvatar img='./img/users/user_1.png' size='10' />
          <div>
            <p className='font-semibold'>fullName</p>
            <p className='text-xs text-gray-400'>online</p>
          </div>
        </div>
        <ButtonIconCircular
          icon={
            minifyScreen
              ? './icon/maximize_screen.svg'
              : './icon/minify_screen.svg'
          }
          size='10'
          onClick={() => setMinifyScreen((preview) => !preview)}
        />
      </div>
      <div className='flex-1 flex-col p-2 space-y-3'>
        <Message
          direction='LEFT'
          text='Le lorem ipsum est, en imprimerie, une suite de mots sans signification
        utilisée à titre provisoire pour calibrer une mise en page.'
          date='20/03/20'
        />
        <Message
          direction='RIGTH'
          text='Le lorem ipsum est, en imprimerie, une suite de mots sans signification.'
          date='20/03/2020'
        />
      </div>
      <div className='w-full shadow flex gap-2'>
        <input
          className='bg-white py-3 px-6 rounded-full w-full outline-none'
          type='text'
          placeholder='Add comment'
        />
        <div className='top-0 right-0'>
          <ButtonIconCircular icon='./icon/send.svg' size='12' />
        </div>
      </div>
    </motion.div>
  )
}

export default ChatSection
