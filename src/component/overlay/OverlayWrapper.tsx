import { AnimatePresence, motion } from 'framer-motion'
import React, { Dispatch } from 'react'
import { connect } from 'react-redux'
import {
  dispatchChangeCurrentStory,
  dispatchCloseOverlay
} from '../../redux/dispatch'
import { IPayload, IPost, IState, IStory } from '../../redux/reducer'
import ButtonIconCircular from '../common/ButtonIconCircular'
import ImageListPreview from '../common/ImageListPreview'
import PostOverlayLeftSide from '../post/PostOverlayLeftSide'
import StoryOverlayLeftSide from '../story/StoryOverlayLeftSide'

function OverlayWrapper({
  showOverlay,
  stories,
  currentPost,
  dispatchCloseOverlay,
  OverlayType,
  currentStory,
  dispatchChangeCurrentStory
}: {
  showOverlay: boolean
  stories: IStory[]
  currentPost: IPost
  dispatchCloseOverlay: Function
  OverlayType: string
  currentStory: IStory
  dispatchChangeCurrentStory: (payload: IPayload) => void
}) {
  return (
    <AnimatePresence>
      {showOverlay ? (
        <motion.div
          className='overlaySize bg-black bg-opacity-90 fixed top-16   z-20'
          initial={{
            opacity: 0
          }}
          animate={{
            opacity: 1
          }}
          exit={{ opacity: 0 }}
        >
          <div className='absolute top-2 right-2'>
            <ButtonIconCircular
              icon='./icon/close_blue.svg'
              size='14'
              bgColor='bg-white'
              onClick={() => dispatchCloseOverlay({})}
            />
          </div>
          <div className='w-full h-full flex '>
            <div className='bg-white w-96 h-full overflow-y-scroll'>
              {OverlayType === 'STORY' ? (
                <StoryOverlayLeftSide
                  currentStory={currentStory}
                  stories={stories}
                  dispatchChangeCurrentStory={dispatchChangeCurrentStory}
                />
              ) : (
                <PostOverlayLeftSide currentPost={currentPost} />
              )}
            </div>
            <ImageListPreview />
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}

const mapStateToProps = (state: IState) => {
  return {
    showOverlay: state.showOverlay,
    stories: state.stories,
    currentPost: state.currentPost,
    OverlayType: state.OverlayType,
    currentStory: state.currentStory
  }
}

const mapDispatchToProps = (dispatch: Dispatch<{ type: string }>) => {
  return {
    dispatchCloseOverlay: () => dispatch(dispatchCloseOverlay()),
    dispatchChangeCurrentStory: (payload: IPayload) =>
      dispatch(dispatchChangeCurrentStory(payload))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(OverlayWrapper)
