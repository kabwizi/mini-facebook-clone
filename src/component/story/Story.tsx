import React, { Dispatch } from 'react'
import { connect } from 'react-redux'
import { dispatchShowAllStories } from '../../redux/dispatch'
import { IAction, IPayload, IStory } from '../../redux/reducer'
import CircularAvatar from '../common/CircularAvatar'

function Story({
  story,
  dispatchShowAllStories
}: {
  story: IStory
  dispatchShowAllStories: Function
}) {
  return (
    <div
      className='flex-none relative flex justify-center w-40 h-48 rounded-3xl overflow-visible shadow-lg cursor-pointer'
      style={{
        backgroundImage: `url(${story.imageList[0]})`,
        objectFit: 'cover',
        backgroundPosition: 'center',
        backgroundSize: 'cover'
      }}
      onClick={() =>
        dispatchShowAllStories({
          story: story
        })
      }
    >
      <div className='absolute -top-6 border-4 border-white rounded-full shadow'>
        <CircularAvatar img={story.user.profileImage} size='12' />
      </div>
    </div>
  )
}

const mapDispatchToProps = (dispatch: Dispatch<IAction>) => {
  return {
    dispatchShowAllStories: (payload: IPayload) =>
      dispatch(dispatchShowAllStories(payload))
  }
}

export default connect(null, mapDispatchToProps)(Story)
