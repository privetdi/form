import React from 'react'
import btnRemove from '../assets/btnRemove.svg'
import './buttonRemove.scss'

function ButtonRemove({ id, cb }: { id: number; cb: (id: number) => void }) {
  return (
    <button className="buttonRemove" onClick={() => cb(id)}>
      <img className="iconRemove" src={btnRemove} />
    </button>
  )
}

export default ButtonRemove
