import React from 'react'
import { ShopSection } from '../Shop-section'
import { ITEM } from './constant'

export const PopularItems = () => {
  return (
    <div className='mt-8'>
        <span className='text-white font-Poppins font-medium text-7xl flex justify-center'>Популярные Товары</span>
        <div className='mx-16 mt-10'>
            <ShopSection items={ITEM}/>
        </div>
    </div>
  )
}
