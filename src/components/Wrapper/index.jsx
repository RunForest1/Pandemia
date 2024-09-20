import React from 'react'

export const Wrapper = ({children}) => {
  return (
    <div className='container max-w-full py-4 min-h-screen'>{children}</div>
  )
}
