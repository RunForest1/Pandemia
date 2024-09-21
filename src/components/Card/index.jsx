import React from 'react'
import { ButtonCard } from '../Button-card'

export const Card = () => {
  return (
    <div className='bg-no-repeat w-80 h-80 p-10 mt-72 bg-[url(/src/images/card.png)] space-y-8'>
      <span className='text-white font-Poppins font-medium text-2xl'>HMMWV</span>
      <p className='text-white font-Poppins font-medium text-sm'>
        HMMWV (High Mobility Multi-purpose Wheeled Vehicle), 
        также известный как Humvee, 
        представляет собой многоцелевой колесный вездеход
      </p>
      <div className='flex items-center justify-start space-x-8'>
        <span className='text-white font-Poppins font-extrabold text-3xl'>250 ₽</span>
        <ButtonCard/>
      </div>
    </div>
  )
}
