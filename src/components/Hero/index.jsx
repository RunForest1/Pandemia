import React from 'react'
import { ReactComponent as HeroImage } from "../../images/hero.svg"
import { SideMenu } from '../Side-menu'
import { Card } from '../Card'

export const Hero = () => {
  return (
    <section>
        <div className='flex justify-between mt-24'>
          <SideMenu/>
          <Card/>
          <HeroImage/>
        </div>
    </section>
  )
}
