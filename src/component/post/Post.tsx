import React, { Dispatch } from 'react'
import { connect } from 'react-redux'
import { dispatchSinglePost } from '../../redux/dispatch'
import { IAction, IPayload, IPost } from '../../redux/reducer'
import ButtonIconCircular from '../common/ButtonIconCircular'
import CircularAvatar from '../common/CircularAvatar'

function Post({
  post,
  dispatchShowSinglePost
}: {
  post: IPost
  dispatchShowSinglePost: (payload: IPayload) => void
}) {
  return (
    <div className='bg-white p-5 rounded-3xl shadow-md space-y-4'>
      <div className='flex justify-between'>
        <div className='flex items-center gap-4'>
          <CircularAvatar img='./img/users/user_1.png' size='10' />
          <div>
            <p className='font-semibold'>{`${post.user.firstName} ${post.user.lastName}`}</p>
            <div className='flex gap-2 items-center'>
              <p className='text-gray-400 text-xs'>{post.date}</p>
              <div className='w-2 h-2 rounded-full bg-green-500 mt-1'></div>
            </div>
          </div>
        </div>
        <ButtonIconCircular icon='./icon/more_option.svg' />
      </div>
      <div>
        <p className='inline'>{post.description}</p>
      </div>
      {post.ImageList ? (
        post.ImageList.length > 4 ? (
          <div
            className={`grid ${
              post.ImageList.length > 1 ? 'grid-cols-2' : ''
            } gap-4`}
            onClick={() => dispatchShowSinglePost({ post: post })}
          >
            {post.ImageList.slice(0, 4).map((img, index) => (
              <div
                key={index}
                className='relative w-full h-60 rounded-lg overflow-x-hidden cursor-pointer'
              >
                <img className='w-full h-full object-cover ' src={img} alt='' />
                {index === 3 ? (
                  <div className='bg-black bg-opacity-50 absolute top-0 w-full h-full z-10 flex justify-center items-center'>
                    <p className='text-white text-2xl'>
                      +{post.ImageList.length - 4}
                    </p>
                  </div>
                ) : (
                  <></>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div
            className={`grid ${
              post.ImageList.length > 1 ? 'grid-cols-2' : ''
            } gap-4 cursor-pointer`}
            onClick={() => dispatchShowSinglePost({ post: post })}
          >
            {post.ImageList.map((img, index) => (
              <img
                key={index}
                className='w-full h-60 object-cover rounded-lg'
                src={img}
                alt=''
              />
            ))}
          </div>
        )
      ) : null}
      <div className='relative'>
        <input
          className='bg-gray-50 py-2 px-6 rounded-full w-full text-xs outline-none'
          type='text'
          placeholder='Add comment'
        />
        <div className='absolute top-0 right-0'>
          <ButtonIconCircular icon='./icon/send.svg' />
        </div>
      </div>
      <div className='flex justify-between'>
        <div className='flex gap-6'>
          <img src='./icon/share.svg' alt='' />
          <div className='flex gap-2'>
            <img src='./icon/like.svg' alt='' />
            <p className='text-xs text-gray-400 whitespace-nowrap'>14 likes</p>
          </div>
        </div>
        <img src='./icon/star.svg' alt='' />
      </div>
    </div>
  )
}

const mapDispatchToProps = (dispatch: Dispatch<IAction>) => {
  return {
    dispatchShowSinglePost: (payload: IPayload) =>
      dispatch(dispatchSinglePost(payload))
  }
}
export default connect(null, mapDispatchToProps)(Post)
