import React, { useState } from 'react'
import './input.scss'

interface InputI {
  label: string
  classN: string
  id?: string
  defaultValue: string
  placeholder: string
  cb?: (e: React.ChangeEvent<HTMLInputElement>) => void
  value: string
}

function Input({
  label,
  classN,
  id,
  defaultValue,
  placeholder,
  cb,
  value,
}: InputI) {
  return (
    <div className="inputMarkup">
      <h1 className="inputMarkup__lable">{label}</h1>
      <input
        id={id}
        className={`inputMarkup__Input ${classN}`}
        type="text"
        placeholder={placeholder}
        onChange={cb}
        value={value}
      />
    </div>
  )
}

export default Input
