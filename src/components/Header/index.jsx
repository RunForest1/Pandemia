import React from 'react'
import { Logo } from '../Logo'
import { NavItem } from '../Nav-item'
import { NavMenu } from '../Nav-menu'
import { SERVER } from './constant'
import { ReactComponent as Search } from '../../images/search.svg'
import { ReactComponent as Basket } from '../../images/basket.svg'
import { ReactComponent as Profile } from '../../images/profile.svg'
import { ButtonNav } from '../Button-nav'


export const Header = () => {
  return (
    <header className='flex items-center justify-between mt-16 space-x-52 mx-14'>
      <Logo/>
      <nav className='flex items-center space-x-20'>
        <NavItem text='Новости'/>
        <NavItem text='Сервера'>
          <NavMenu items={SERVER}/>
        </NavItem>
        <NavItem text='Магазин'/>
        <NavItem text='Банлист'/>
        <NavItem text='Наш ВК'/>
        <NavItem text='Наш DISCORD'/>
      </nav>
      <div className='flex items-center space-x-10'>
        <ButtonNav icon={<Search/>}/>
        <ButtonNav icon={<Basket/>}/>
        <ButtonNav icon={<Profile/>}/>
      </div>
    </header>
  )
}
