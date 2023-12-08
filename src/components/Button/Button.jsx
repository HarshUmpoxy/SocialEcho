import React, { Children } from 'react'

const Button = ({
    text,
    type="button",
    className="",
    textColor="white",
    bgColor="bg-blue-600",
    ...props
}) => {

  return (
    <button
    {...props}
    className={`px-4 py-2 rounded-lg ${bgColor} ${textColor} ${className}`}
    >
        {text}
    </button>
  )
}

export default Button