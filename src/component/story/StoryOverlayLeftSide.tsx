import { motion } from 'framer-motion'
import React from 'react'
import { IPayload, IStory } from '../../redux/reducer'
import ButtonIconCircular from '../common/ButtonIconCircular'
import CircularAvatar from '../common/CircularAvatar'

function StoryOverlayLeftSide({
  currentStory,
  stories,
  dispatchChangeCurrentStory
}: {
  currentStory: IStory
  stories: IStory[]
  dispatchChangeCurrentStory: (payload: IPayload) => void
}) {
  return (
    <div>
      <div className='flex w-full justify-between  px-5 pt-5 pb-2'>
        <h2 className='text-3xl font-bold '>Stories</h2>
        <ButtonIconCircular icon='./icon/more_option.svg' size='10' />
      </div>
      {stories.map((story) => (
        <motion.div
          initial={{ backgroundColor: '#fff' }}
          animate={{
            backgroundColor:
              currentStory.user.firstName === story.user.firstName
                ? '#F4FAFF'
                : '#fff'
          }}
          key={story.user.firstName}
          className='flex gap-4 py-2 cursor-pointer'
          onClick={() => dispatchChangeCurrentStory({ story: story })}
        >
          <motion.div
            initial={{ backgroundColor: '#fff' }}
            animate={{
              backgroundColor:
                currentStory.user.firstName === story.user.firstName
                  ? '#60A5FA'
                  : '#fff'
            }}
            className=' w-2 h-16 rounded-r-3xl'
          ></motion.div>
          <CircularAvatar img={story.user.profileImage} size='16' />
          <div className='flex flex-col justify-around'>
            <p className='font-semibold text-lg'>
              {`${story.user.firstName} ${story.user.lastName}`}
            </p>
            <p className='text-gray-500 text-xs'>7 new stories</p>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

export default StoryOverlayLeftSide
