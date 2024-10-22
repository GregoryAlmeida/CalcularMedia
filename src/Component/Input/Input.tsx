import React from 'react'

type InputProps = React.ComponentProps<'input'> & {
  label: string;
  type: string;
}

export default function Input({label, type, ...opt}: InputProps) {
  return (
    <div>
      <label htmlFor={label}>{label}</label>
      <input type={type} id={label} {...opt} />
    </div>
  )
}
