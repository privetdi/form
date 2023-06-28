import React, { useState } from 'react'
import './input.scss'

interface InputI {
  label?: string
  classN: string
  id: number
  defaultValue: string
  placeholder: string
  cb: (e: React.ChangeEvent<HTMLInputElement>, id: number) => void
  value: string
}

function Input({
  label,
  classN,
  id = 0,
  defaultValue,
  placeholder,
  cb,
  value,
}: InputI) {
  return (
    <div className="inputMarkup">
      {label ? <h1 className="inputMarkup__lable">{label}</h1> : null}
      <input
        id={`field-advatages-${id}`}
        className={`inputMarkup__Input ${classN}`}
        type="text"
        placeholder={placeholder}
        onChange={(e) => {
          cb(e, id)
        }}
        value={value}
      />
    </div>
  )
}

export default Input
