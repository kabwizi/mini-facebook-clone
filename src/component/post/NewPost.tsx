import { motion } from 'framer-motion'
import React from 'react'
import ButtonIconCircular from '../common/ButtonIconCircular'
import TitleSection from '../common/TitleSection'

function NewPost() {
  return (
    <div className='bg-white p-5 rounded-3xl shadow-md space-y-4'>
      <div className='relative flex justify-center items-center py-2'>
        <div className='absolute left-0'>
          <TitleSection title='New post' />
        </div>
        <div className='flex gap-5'>
          <img src='./icon/video_blue.svg' alt='' />
          <img src='./icon/image_blue.svg' alt='' />
        </div>
        <div className='absolute right-0'>
          <ButtonIconCircular icon='./icon/more_option.svg' />
        </div>
      </div>
      <div>
        <textarea
          className='bg-gray-50 rounded-2xl w-full p-5 text-xs outline-none'
          rows={5}
          placeholder='Add your comment'
        ></textarea>
      </div>

      <motion.div
        whileHover={{ scale: 1.01 }}
        transition={{ duration: 0.3 }}
        className='bg-blue-400 text-center text-white rounded-full py-1 font-semibold cursor-pointer select-none'
      >
        Publish
      </motion.div>
    </div>
  )
}

export default NewPost
