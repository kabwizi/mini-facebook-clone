import React from 'react'
import ButtonSeeMore from '../common/ButtonSeeMore'
import MarketPlaceProduct from './MarketPlaceProduct'
import TitleSection from '../common/TitleSection'

function MarketPlaceSection() {
  return (
    <div className='bg-white w-96 p-5 shadow-lg rounded-3xl space-y-3'>
      <TitleSection title='Market place' />
      <div className='h-72 grid grid-cols-2 w-full gap-4'>
        <MarketPlaceProduct img='./img/products/product_1.png' price='45' />
        <MarketPlaceProduct img='./img/products/product_2.png' price='45' />
        <MarketPlaceProduct img='./img/products/product_3.png' price='45' />
        <MarketPlaceProduct img='./img/products/product_4.png' price='45' />
      </div>
      <ButtonSeeMore />
    </div>
  )
}

export default MarketPlaceSection
