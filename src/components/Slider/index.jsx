import React from 'react'
import { SliderItem } from '../Slider-item'

export const Slider = ({items = []}) => {
  return (
    <div className='flex'> 
        {items.map(({text}) => <SliderItem key = {text} text = {text} />)}
    </div>
  )
}
