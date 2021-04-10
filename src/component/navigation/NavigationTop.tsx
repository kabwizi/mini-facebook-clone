import React, { useState } from 'react'
import CircularAvatar from '../common/CircularAvatar'
import NavigationTopItem from './NavigationTopItem'

function NavigationTop() {
  const [currentPageIndex, setCurrentPageIndex] = useState(0)
  return (
    <div className='bg-white h-16 w-full sticky top-0 flex justify-center gap-6 items-center shadow-md z-50'>
      <div className='bg-blue-400 w-12 h-12 absolute left-4 rounded-full flex justify-center items-center'>
        <img src='./icon/logo.svg' alt='' />
      </div>
      <NavigationTopItem
        text='Home'
        currentPageIndex={currentPageIndex}
        pageIndex={0}
        setCurrentPageIndex={setCurrentPageIndex}
      />
      <NavigationTopItem
        text='Notification'
        currentPageIndex={currentPageIndex}
        pageIndex={1}
        setCurrentPageIndex={setCurrentPageIndex}
      />
      <NavigationTopItem
        text='Message'
        currentPageIndex={currentPageIndex}
        pageIndex={2}
        setCurrentPageIndex={setCurrentPageIndex}
      />
      <NavigationTopItem
        text='Profile'
        currentPageIndex={currentPageIndex}
        pageIndex={3}
        setCurrentPageIndex={setCurrentPageIndex}
      />
      <div className='absolute right-4 flex gap-4 items-center'>
        <input
          className='bg-gray-50 px-4 py-2 rounded-2xl outline-none w-72 text-xs'
          type='text'
          placeholder='Add your comment'
        />
        <CircularAvatar img='./img/users/user_1.png' size='10' />
        <img src='./icon/cog.svg' alt='' />
      </div>
    </div>
  )
}

export default NavigationTop
