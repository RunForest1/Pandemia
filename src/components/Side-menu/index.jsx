import React from 'react'
import { ReactComponent as Dots } from '../../images/dots.svg'

export const SideMenu = () => {
  return (
    <div className='mt-14 space-y-8'>
        <p className='whitespace-normal text-white font-Poppins font-medium text-2xl w-60 ml-10'>
          Доставка предметов 
            лучшего качества из 
             магазина!
        </p>
        <Dots/>
        <p className='font-Poppins text-lg font-medium text-white underline cursor-pointer hover:text-blue-500 duration-300 ml-10 underline-offset-4'>
          Тех.поддержка
        </p>
    </div>
  )
}
