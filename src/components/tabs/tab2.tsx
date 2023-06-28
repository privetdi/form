import React from 'react'
import { useDispatch } from 'react-redux'
import { RootState } from '../../store/store'
import { useSelector } from 'react-redux'
import { setEmail, setPhone } from '../../store/reducers/slice'
import Profil from '../profil'
import Input from '../input'
import Button from '../button'
import TabMap from './tabMap'
import './tabs.scss'
import SelectComponent from '../select'

function Tab2({
  cbNext,
  cbBack,
}: {
  cbNext?: () => void
  cbBack?: () => void
}) {
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
      <TabMap tab={2} />
      <Input
        label="Nickname"
        classN="phone"
        defaultValue="123"
        placeholder="placeholder"
        cb={setDispatchPhone}
        value={phone}
        id={0}
      />
      <Input
        label="Name"
        classN="email"
        defaultValue="123"
        placeholder="placeholder"
        cb={setDispatchEmail}
        value={email}
        id={0}
      />
      <Input
        label="Surname"
        classN="email"
        defaultValue="123"
        placeholder="placeholder"
        cb={setDispatchEmail}
        value={email}
        id={0}
      />
      <h1 className="selectMarkup__lable">Sex</h1>
      <SelectComponent />
      <div className="buttonWraper">
        <Button id="button-back" classN="" text="Назад" cb={cbBack} />
        <Button id="button-next" classN="blue" text="Далее" cb={cbNext} />
      </div>
    </>
  )
}

export default Tab2
