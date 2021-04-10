import { motion } from 'framer-motion'
import React from 'react'

function NavigationTopItem({
  text,
  currentPageIndex,
  pageIndex,
  setCurrentPageIndex
}: {
  text: string
  currentPageIndex: number
  pageIndex: number
  setCurrentPageIndex: React.Dispatch<React.SetStateAction<number>>
}) {
  return (
    <motion.div
      className={`relative h-full flex items-center font-semibold cursor-pointer ${
        currentPageIndex === pageIndex ? 'text-blue-500' : 'text-gray-500'
      }`}
      initial={{
        color: currentPageIndex === pageIndex ? '#60A5FA' : '#969696'
      }}
      animate={{
        color: currentPageIndex === pageIndex ? '#60A5FA' : '#969696'
      }}
      onClick={() => setCurrentPageIndex(pageIndex)}
    >
      <motion.div
        className={`absolute top-0 h-1 w-full rounded-b-3xl ${
          currentPageIndex === pageIndex ? 'bg-blue-500' : 'bg-white'
        }`}
        initial={{
          backgroundColor: currentPageIndex === pageIndex ? '#60A5FA' : '#fff'
        }}
        animate={{
          backgroundColor: currentPageIndex === pageIndex ? '#60A5FA' : '#fff'
        }}
      ></motion.div>
      <p>{text}</p>
    </motion.div>
  )
}

export default NavigationTopItem
