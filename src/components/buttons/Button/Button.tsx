import React from 'react'
import { ButtonProps } from './Button.type'

function Button({className,children,...props}:ButtonProps) {
  return (
    <button {...props} className={`bg-primary border-primary px-8 py-2 border-2 rounded-br-md rounded-tr-md text-white ${className}`}>
        {children}
    </button>
  )
}

export default Button