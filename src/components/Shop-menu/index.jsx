import React from 'react'
import { Slider } from '../Slider'
import { MENU } from './constant'

export const ShopMenu = () => {
  return (
    <section className='mt-40'>
        <div className='flex items-center justify-center mx-20'>
            <span className='font-Poppins text-white text-7xl font-medium center'>Меню</span>
        </div>
        <Slider items={MENU}/>
    </section>
  )
}
