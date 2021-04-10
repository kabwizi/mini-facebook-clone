import React, { useRef } from 'react'
import { connect } from 'react-redux'
import { IState, IStory } from '../../redux/reducer'
import ButtonIconCircular from '../common/ButtonIconCircular'
import Story from './Story'
import NoScrollBar from '../../noScrollBar.module.css'

function StoriesSection({ stories }: { stories: IStory[] }) {
  const scrollableDivRef = useRef<HTMLDivElement>(null)
  return (
    <div className={`${NoScrollBar.noScrollBar} relative flex items-center`}>
      <div className='absolute -left-8 z-10 mt-14 '>
        <ButtonIconCircular
          icon='./icon/arrow_left_blue.svg'
          size='14'
          bgColor='bg-white'
          onClick={() =>
            scrollableDivRef.current?.scrollBy({
              top: 0,
              left: -200,
              behavior: 'smooth'
            })
          }
        />
      </div>

      <div className='absolute -right-8 z-10 mt-14 '>
        <ButtonIconCircular
          icon='./icon/arrow_rigth_blue.svg'
          size='14'
          bgColor='bg-white'
          onClick={() =>
            scrollableDivRef.current?.scrollBy({
              top: 0,
              left: 200,
              behavior: 'smooth'
            })
          }
        />
      </div>

      <div
        ref={scrollableDivRef}
        className='flex gap-10 mt-16 overflow-x-scroll py-6'
      >
        {stories.map((story) => (
          <Story key={story.user.firstName} story={story} />
        ))}
      </div>
    </div>
  )
}

const mapStateToProps = (state: IState) => {
  return {
    stories: state.stories
  }
}

export default connect(mapStateToProps)(StoriesSection)
