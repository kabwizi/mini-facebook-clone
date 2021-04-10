import React from 'react'
import { IPost } from '../../redux/reducer'
import ButtonIconCircular from '../common/ButtonIconCircular'
import PostComment from './PostComment'

function PostOverlayLeftSide({ currentPost }: { currentPost: IPost }) {
  return (
    <div className='space-y-5 p-5'>
      <div className='flex w-full justify-between'>
        <h2 className='text-3xl font-bold'>Post</h2>
        <ButtonIconCircular icon='./icon/more_option.svg' size='10' />
      </div>
      <PostComment currentPost={currentPost} />
    </div>
  )
}

export default PostOverlayLeftSide
