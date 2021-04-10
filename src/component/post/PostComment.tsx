import React from 'react'
import { IPost } from '../../redux/reducer'
import CircularAvatar from '../common/CircularAvatar'

function PostComment({ currentPost }: { currentPost: IPost }) {
  return (
    <div className='space-y-2'>
      <div className='flex items-center gap-4'>
        <div>
          <CircularAvatar img='./img/users/user_1.png' size='16' />
        </div>
        <div className='flex justify-between items-center w-full'>
          <p className='text-lg font-bold'>{`${currentPost.user.firstName} ${currentPost.user.lastName}`}</p>
          <p className='text-xs text-gray-500'>{currentPost.date}</p>
        </div>
      </div>
      <p>{currentPost.description}</p>
      <div className='flex justify-between'>
        <div className='flex gap-6'>
          <img src='./icon/share.svg' alt='' />
          <div className='flex gap-2'>
            <img src='./icon/like.svg' alt='' />
            <p className='text-xs text-gray-400 whitespace-nowrap'>14 likes</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PostComment
