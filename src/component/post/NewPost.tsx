import React from 'react'
import ButtonIconCircular from '../common/ButtonIconCircular'
import TitleSection from '../common/TitleSection'

function NewPost() {
  return (
    <div className='bg-white p-5 rounded-3xl shadow-md space-y-4'>
      <div className='flex justify-between'>
        <TitleSection title='New post' />
        <div className='flex gap-4'>
          <img src='./icon/video_blue.svg' alt='' />
          <img src='./icon/image_blue.svg' alt='' />
        </div>
        <ButtonIconCircular icon='./icon/more_option.svg' />
      </div>
      <div>
        <textarea
          className='bg-gray-50 rounded-2xl w-full p-5 text-xs outline-none'
          rows={5}
          placeholder='Add your comment'
        ></textarea>
      </div>

      <div className='bg-blue-400 text-center text-white rounded-full py-1 font-semibold'>
        Publish
      </div>
    </div>
  )
}

export default NewPost
