import React from 'react'
import './Input.css'

type InputProps = React.ComponentProps<'input'> & {
  label: string;
  type: string;
}

export default function Input({label, type, ...opt}: InputProps) {
  return (
    <div className='input' >
      <label htmlFor={label}>{label}</label>
      <input type={type} id={label} {...opt} />
    </div>
  )
}
