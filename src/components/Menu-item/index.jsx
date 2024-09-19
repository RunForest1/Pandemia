import React from 'react'

export const MenuItem = ({text = '', icon}) => {
  return (
    <div className='flex flex-col items-start w-full space-x-4'>
        <span className='text-white hover:text-blue-500 cursor-pointer'>{text}</span>
        {icon}
    </div>
  )
}
