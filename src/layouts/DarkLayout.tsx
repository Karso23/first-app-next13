import React from 'react'
import { PropsWithChildren } from 'react'

// El type PropsWithChildren es el tipo de dato que le debemos especificar a los layouts
export const DarkLayout = ({ children }: PropsWithChildren) => {
  return (
    <div style={{
      backgroundColor: 'rgba(0,0,0,0.3)',
      borderRadius: '5px',
      padding: '10px'
    }}>

      <h3>Dark-Layout</h3>
      {children}
    </div>
  )
}

export default DarkLayout;