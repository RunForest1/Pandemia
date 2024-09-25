import React from 'react'
import { SaleItem } from '../Sale-item'

export const ShopSection = ({items = []}) => {
  return (
    <div className='grid grid-cols-6 gap-10'>
        {items.map(({text, info, price, image}) => <SaleItem key = {text} text = {text} info = {info} price={price} image={image}/>)}
    </div>
  )
}
