import React from 'react'
import { ButtonCard } from '../Button-card'

export const SaleItem = ({text = '', info = '', price = '', image}) => {
  return (
    <a href='#' className='w-56 flex flex-col space-y-6'>
      {image}
      <span className='text-white font-Poppins font-medium text-xl'>
        {text}
      </span>
      <p className='text-white font-Poppins font-medium text-sm'>
        {info}
      </p>
      <div className='flex space-x-8'>
        <span className='text-white font-Poppins font-extrabold text-2xl'>{price}</span>
        <ButtonCard/>
      </div>
    </a>
  )
}
