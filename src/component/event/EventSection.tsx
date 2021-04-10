import React from 'react'
import ButtonSeeMore from '../common/ButtonSeeMore'
import EventCard from './EventCard'
import TitleSection from '../common/TitleSection'
import UserBubbleList from './UserBubbleList'

function EventSection() {
  return (
    <div className='bg-white p-5 w-96 shadow-lg rounded-3xl sticky top-18 self-start'>
      <TitleSection title='Events' />
      <div
        className='bg-red-700 w-full h-52 relative p-2 rounded-md mt-2 cursor-pointer'
        style={{
          backgroundImage: 'url(./img/events/event_1.png)',
          backgroundSize: 'cover',
          objectFit: 'cover'
        }}
      >
        <p className='font-semibold text-white'>Vole en mogolfière</p>
        <div className='absolute bottom-2 '>
          <UserBubbleList
            userList={[
              './img/users/user_1.png',
              './img/users/user_1.png',
              './img/users/user_1.png',
              './img/users/user_1.png',
              './img/users/user_1.png',
              './img/users/user_1.png',
              './img/users/user_1.png',
              './img/users/user_1.png'
            ]}
            size='9'
          />
        </div>
      </div>
      <p className='font-bold mt-2'>Other events</p>
      <EventCard
        img='./img/events/event_2.png'
        title='Live choir'
        date='02 Jun'
        Subscriber={[
          './img/users/user_1.png',
          './img/users/user_1.png',
          './img/users/user_1.png',
          './img/users/user_1.png',
          './img/users/user_1.png',
          './img/users/user_1.png'
        ]}
      />
      <EventCard
        img='./img/events/event_3.png'
        title='party house'
        date='14 Oct'
        Subscriber={['./img/users/user_1.png', './img/users/user_1.png']}
      />
      <ButtonSeeMore />
    </div>
  )
}

export default EventSection
