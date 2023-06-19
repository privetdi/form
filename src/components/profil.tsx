import React from 'react'
import Links from './links'
import './profil.scss'

type Numb = {
  number: number
}

function Profil({ number }: Numb) {
  return (
    <div className="profil">
      <div className="profil__initials">
        <h1 className="profil__initials">а и</h1>
      </div>
      <div className="profil__info">
        <div className="profil__name">
          <h1 className="name">Иван Иванов</h1>
        </div>
        <div className="links">
          <Links name="Telegram" url="teleg" />
          <Links name="GitHub" url="https://github.com/privetdi" />
          <Links name="Resume" url="hh" />
        </div>
      </div>
    </div>
  )
}

export default Profil
