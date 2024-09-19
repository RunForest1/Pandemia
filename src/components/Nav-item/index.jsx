import React, { useState } from 'react'
import {ReactComponent as ArrowDownIcon} from '../../images/icon-arrow-down.svg'
import {ReactComponent as ArrowUpIcon} from '../../images/icon-arrow-up.svg'

export const NavItem = ({text = '', children}) => {
    const [selected, setSelected ] = useState('');
return (
    <div className='relative'>
        <div className='flex items-center space-x-2 group'>
            <span 
                className='text-white font-Poppins font-medium text-lg group-hover:text-blue-500 cursor-pointer duration-300'
                onClick={() => children && setSelected(text !== selected ? text : '')}
            >
                {text}
            </span>
            { children && selected !== text && <ArrowUpIcon className='group-hover:stroke-blue-500 cursor pointer'/>}
            { children && selected === text && <ArrowDownIcon className='group-hover:stroke-blue-500 duration-300 cursor pointer'/>}
        </div>
        { selected && children }
    </div>
  )
}
