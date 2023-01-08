import React, { useState } from 'react'

export const FlexCenter = (props:any) => {
  return (
    <div className='flex items-center justify-start'>{props.children}</div>
  )
}
