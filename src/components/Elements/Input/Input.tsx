import React from "react"

function Input(props) {
  const { type, placeholder, name } = props
  return (
    <>
      <input
        type={type}
        className="text-sm border rounded w-full p-2 px3 text-slate-700 placeholder:opacity-50 "
        placeholder={placeholder}
        name={name}
        id={name}
      />
    </>
  )
}

export default Input