import React from 'react'
import { connect } from 'react-redux'
import './App.css'
import ContactSection from './component/contact/ContactSection'
import EventSection from './component/event/EventSection'
import MarketPlaceSection from './component/market/MarketPlaceSection'
import NavigationTop from './component/navigation/NavigationTop'
import NewPost from './component/post/NewPost'
import Post from './component/post/Post'
import StoriesSection from './component/story/StoriesSection'
import Suggestion from './component/suggestion/Suggestion'
import { IPost, IState, IUser } from './redux/reducer'
import OverlayWrapper from './component/overlay/OverlayWrapper'
import ChatSection from './component/Chat/ChatSection'

function App({
  posts,
  friends,
  suggestions
}: {
  posts: IPost[]
  friends: IUser[]
  suggestions: IUser[]
}) {
  return (
    <div className='App bg-gray-50 pb-20'>
      <NavigationTop />
      <div className='screenSize mx-auto px-6'>
        <StoriesSection />
        <div className='flex mt-10 gap-12 '>
          <div className='md:hidden space-y-10 sticky top-18 self-start'>
            <ContactSection friends={friends} />
            <Suggestion suggestions={suggestions} />
          </div>
          <div className='flex-1 space-y-10'>
            <NewPost />
            {posts.map((post, index) => (
              <Post key={index} post={post} />
            ))}
          </div>
          <div className='xl:hidden space-y-10 '>
            <MarketPlaceSection />
            <EventSection />
          </div>
        </div>
      </div>
      <ChatSection />
      <OverlayWrapper />
    </div>
  )
}

const mapStateToProps = (state: IState) => {
  return {
    posts: state.posts,
    friends: state.friends,
    suggestions: state.suggestions
  }
}

export default connect(mapStateToProps)(App)
