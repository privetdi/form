import React from 'react'
import './button.scss'

interface ButtonI {
  id?: string
  classN: string
  cb?: () => void
  text: string
}

function Button({ id, classN, cb, text }: ButtonI) {
  return (
    <button id={id} className={`button ${classN}`} onClick={cb}>
      <h1 className="button__text">{text}</h1>
    </button>
  )
}

export default Button
