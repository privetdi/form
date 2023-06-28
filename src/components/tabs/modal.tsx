import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import './modal.scss'
import Button from '../button'
import successfullyImg from '../../assets/icon-decor-predefined.png'
import accessDeniedImg from '../../assets/icon-decor-predefined2.png'

export const Modal = ({
  message,
  isOpen,
  onClose,
  btnText,
  successfully = false,
}: {
  message: string
  isOpen: boolean
  onClose: () => void
  btnText: string
  successfully?: boolean
}) => {
  if (!isOpen) return null

  return ReactDOM.createPortal(
    <div className="modal-overlay">
      <div className="modal">
        <span className="message">{message}</span>
        <img
          src={successfully ? successfullyImg : accessDeniedImg}
          alt=""
          className="imgSuccessfully"
        />
        <Button id={''} classN={'blue modalBtn'} cb={onClose} text={btnText} />
      </div>
    </div>,

    document.body
  )
}
