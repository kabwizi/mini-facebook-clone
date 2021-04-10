import React from 'react'
import ButtonSeeMore from '../common/ButtonSeeMore'
import Contact from './Contact'
import TitleSection from '../common/TitleSection'
import { IUser } from '../../redux/reducer'

function ContactSection({ friends }: { friends: IUser[] }) {
  return (
    <div className='bg-white py-5 px-3 w-80 shadow-lg rounded-3xl'>
      <div className='px-3 pb-1'>
        <TitleSection title='Contact' />
      </div>
      {friends.map((friend) => (
        <Contact
          key={friend.firstName}
          type='CONTACT'
          img={friend.profileImage}
          active={friend.status === 'ONLINE'}
          fullName={`${friend.firstName} ${friend.lastName}`}
        />
      ))}
      <ButtonSeeMore />
    </div>
  )
}

export default ContactSection
