import React from 'react'
import { Logo } from '../Logo'

export const Footer = () => {
  return (
    <div className='bg-black mt-64'>
        <div className='mx-16'>
            <nav className='flex items-center space-x-20 py-10'>
                <Logo/>
                <a href="#" className='text-white font-Poppins font-medium text-sm underline underline-offset-4 hover:text-blue-500 cursor-pointer duration-300'>Обратная связь</a>
                <a href="#" className='text-white font-Poppins font-medium text-sm underline underline-offset-4 hover:text-blue-500 cursor-pointer duration-300'>Поддержка</a>
                <a href="#" className='text-white font-Poppins font-medium text-sm underline underline-offset-4 hover:text-blue-500 cursor-pointer duration-300'>Оплата</a>
                <a href="#" className='text-white font-Poppins font-medium text-sm underline underline-offset-4 hover:text-blue-500 cursor-pointer duration-300'>Контакты</a>
            </nav>
            <div className='border-t flex justify-between py-6'>
                <span className='pl-18 text-white font-Poppins font-medium text-sm'>
                    © 2024,  «Pandemia», официальный сайт
                </span>
                <div className='space-x-16'>
                    <a href="#" className='text-white font-Poppins font-medium text-sm underline underline-offset-4 hover:text-blue-500 cursor-pointer duration-300'>Политика конфиденциальности и оферта</a>
                    <a href="#" className='text-white font-Poppins font-medium text-sm underline underline-offset-4 hover:text-blue-500 cursor-pointer duration-300'>Пользовательское соглашение</a>
                </div>
            </div>
        </div>
    </div>
  )
}
