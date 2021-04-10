import React from 'react'

function MarketPlaceProduct({ img, price }: { img: string; price: string }) {
  return (
    <div
      className=' w-full h-full relative rounded-2xl shadow cursor-pointer'
      style={{
        backgroundImage: `url(${img})`,
        backgroundSize: 'cover',
        objectFit: 'cover'
      }}
    >
      <div className='bg-white absolute bottom-0 py-1 px-3 rounded-tr-2xl text-xs font-semibold'>
        {`${price}CAD`}
      </div>
    </div>
  )
}

export default MarketPlaceProduct
