import React from 'react'
import { ButtonProps } from './Button.type'
import {Link} from "react-router-dom";

function Button({className,children,to,...props}:ButtonProps) {
  if(to) {
  return (
      <Link to={to}  className={`inline-block bg-primary border-primary px-8 py-2 border-2 rounded-br-md rounded-tr-md text-white ${className}`}>
    {children}
  </Link>
  )
  }

  return (
    <button {...props} className={`bg-primary border-primary px-8 py-2 border-2 rounded-br-md rounded-tr-md text-white ${className}`}>
        {children}
    </button>
  )
}

export default Button