import React from 'react'
import { ReactComponent as LogoIcon } from '../../images/logo.svg'

export const Logo = () => {
  return (
    <div className='flex items-center space-x-3'>
        <LogoIcon/>
        <span className='text-white font-Rubik text-2xl hover:text-blue-500 duration-300 cursor-pointer'>Pandemia</span>
    </div>
  )
}
