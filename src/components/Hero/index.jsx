import React from 'react'
import { ReactComponent as HeroImage } from "../../images/hero.svg"
import { SideMenu } from '../Side-menu'

export const Hero = () => {
  return (
    <section className='flex justify-between mt-24'>
        <SideMenu/>
        <HeroImage/>
    </section>
  )
}
