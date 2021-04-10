import React from 'react'
import ButtonSeeMore from '../common/ButtonSeeMore'
import Contact from '../contact/Contact'
import TitleSection from '../common/TitleSection'
import { IUser } from '../../redux/reducer'

function Suggestion({ suggestions }: { suggestions: IUser[] }) {
  return (
    <div className='bg-white py-5 px-3 w-80 shadow-lg rounded-3xl'>
      <div className='px-3 pb-1'>
        <TitleSection title='Suggestion' />
      </div>
      {suggestions.map((suggest) => (
        <Contact
          key={suggest.firstName}
          type='SUGGESTION'
          img={suggest.profileImage}
          active={suggest.status === 'ONLINE'}
          fullName={`${suggest.firstName} ${suggest.lastName}`}
        />
      ))}
      <ButtonSeeMore />
    </div>
  )
}

export default Suggestion
