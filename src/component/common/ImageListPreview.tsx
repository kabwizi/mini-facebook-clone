import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { IPost, IState, IStory } from '../../redux/reducer'
import ButtonIconCircular from './ButtonIconCircular'

function ImageListPreview({
  OverlayType,
  currentStory,
  currentPost
}: {
  OverlayType: string
  currentStory: IStory
  currentPost: IPost
}) {
  const [imageList, setImageList] = useState<string[]>([])
  const [imageListIndex, setImageListIndex] = useState(0)

  useEffect(() => {
    setImageList(
      OverlayType === 'POST' ? currentPost.ImageList : currentStory.imageList
    )
    setImageListIndex(0)
  }, [OverlayType, currentPost.ImageList, currentStory.imageList])

  useEffect(() => {
    const changeImageIndex = setInterval(() => {
      if (imageListIndex < imageList.length - 1) {
        setImageListIndex((preview) => preview + 1)
      }
    }, 2000)
    return () => clearInterval(changeImageIndex)
  }, [imageList.length, imageListIndex])

  return (
    <div className='bg-black h-full flex-1 flex justify-center '>
      <div className='relative flex flex-col justify-around items-center gap-5 mt-6'>
        {imageList.length > 1 ? (
          <div className='absolute -left-20 z-10 mt-8'>
            <ButtonIconCircular
              icon='./icon/arrow_left_blue.svg'
              size='14'
              bgColor='bg-white'
              onClick={() => {
                if (imageListIndex > 0) {
                  setImageListIndex((preview) => preview - 1)
                }
              }}
            />
          </div>
        ) : null}
        {imageList.length > 1 ? (
          <div className='absolute -right-20 z-10 mt-8 '>
            <ButtonIconCircular
              icon='./icon/arrow_rigth_blue.svg'
              size='14'
              bgColor='bg-white'
              onClick={() => {
                if (imageListIndex < imageList.length - 1) {
                  setImageListIndex((preview) => preview + 1)
                }
              }}
            />
          </div>
        ) : null}

        <div className='flex justify-around w-full gap-2'>
          {imageList.map((img, index) => (
            <div
              key={index}
              className={`${
                index === imageListIndex ? 'bg-gray-600' : 'bg-white'
              }  h-1 flex-1 rounded-full`}
            ></div>
          ))}
        </div>
        <div
          className='w-96 flex-1 rounded-2xl'
          style={{
            backgroundImage: `url(${imageList[imageListIndex]})`,
            backgroundSize: 'cover',
            objectFit: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center'
          }}
        ></div>
        <div className='relative w-full mb-6'>
          <input
            className='bg-gray-50 py-2 px-6 rounded-full w-full  outline-none'
            type='text'
            placeholder='Add comment'
          />
          <div className='absolute top-0 right-0'>
            <ButtonIconCircular icon='./icon/send.svg' size='10' />
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state: IState) => {
  return {
    OverlayType: state.OverlayType,
    currentStory: state.currentStory,
    currentPost: state.currentPost
  }
}

export default connect(mapStateToProps)(ImageListPreview)
