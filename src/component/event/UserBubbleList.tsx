import React from 'react'

function UserBubbleList({
  userList,
  size
}: {
  userList: String[]
  size: String
}) {
  return (
    <>
      {userList.length > 3 ? (
        <div className='flex items-center'>
          {userList.slice(0, 3).map((user, index) => (
            <div key={index} className='w-6'>
              <div
                className={`w-${size} h-${size} rounded-full border-2 border-white`}
                style={{
                  backgroundImage: `url(${user})`,
                  backgroundSize: 'cover',
                  objectFit: 'cover'
                }}
              ></div>
            </div>
          ))}
          <div
            className={`bg-white flex justify-center items-center w-${size} h-${size} rounded-full shadow`}
          >
            <p className='text-xs font-semibold'>+{userList.length - 3}</p>
          </div>
        </div>
      ) : (
        <div className='flex items-center'>
          {userList.map((user, index) => (
            <div key={index} className='w-6'>
              <div
                className={`w-${size} h-${size} rounded-full border-2 border-white`}
                style={{
                  backgroundImage: `url(${user})`,
                  backgroundSize: 'cover',
                  objectFit: 'cover'
                }}
              ></div>
            </div>
          ))}
        </div>
      )}
    </>
  )
}

export default UserBubbleList
