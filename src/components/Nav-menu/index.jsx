import React from 'react'
import { MenuItem } from '../Menu-item'

export const NavMenu = ({items = []}) => {
  return (
    <div className='flex flex-col px-4 py-2 text-white rounded-lg absolute top-10 left-0 w-72 space-y-4 '> 
        {items.map(({text,icon}) => <MenuItem key = {text} text = {text} icon = {icon} />)}
    </div>
  )
}
