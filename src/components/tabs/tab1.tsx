import React from 'react'
import { useDispatch } from 'react-redux'
import { RootState } from '../../store/store'
import { useSelector } from 'react-redux'
import { setEmail, setPhone } from '../../store/reducers/slice'
import Profil from '../profil'
import Input from '../input'
import Button from '../button'

function Tab1({ cb }: { cb: () => void }) {
  const dispatch = useDispatch()
  let phone = useSelector((state: RootState) => state.store.tab1.phone)
  let email = useSelector((state: RootState) => state.store.tab1.email)

  const setDispatchPhone = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setPhone({ phone: e.target.value }))
  }
  const setDispatchEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setEmail({ email: e.target.value }))
  }
  return (
    <>
      <Input
        label="Номер телефона"
        classN="phone"
        defaultValue="123"
        placeholder="+7 999 999-99-99"
        cb={setDispatchPhone}
        value={phone}
      />
      <Input
        label="Email"
        classN="email"
        defaultValue="123"
        placeholder="tim.jennings@example.com"
        cb={setDispatchEmail}
        value={email}
      />
      <Button id="button-start" classN="blue" text="Начать" cb={cb} />
    </>
  )
}

export default Tab1
