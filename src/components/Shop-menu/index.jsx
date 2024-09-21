import React from 'react'
import { Slider } from '../Slider'
import { ReactComponent as Right } from '../../images/right.svg'
import { ReactComponent as Left } from '../../images/left.svg'
import { MENU } from './constant'

export const ShopMenu = () => {
  return (
    <section className='mt-40'>
        <div className='flex items-center mx-20'>
            <span className='font-Poppins text-white text-7xl font-medium center'>Меню</span>
            <div className='flex space-x-10'>
                <Left/>
                <Right/>
            </div>
        </div>
        <Slider items={MENU}/>
    </section>
  )
}
