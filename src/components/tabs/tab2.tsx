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
import Select from '../select'

function Tab2({ cb }: { cb: () => void }) {
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
      />
      <Input
        label="Name"
        classN="email"
        defaultValue="123"
        placeholder="placeholder"
        cb={setDispatchEmail}
        value={email}
      />
      <Input
        label="Sername"
        classN="email"
        defaultValue="123"
        placeholder="placeholder"
        cb={setDispatchEmail}
        value={email}
      />
      <h1 className="selectMarkup__lable">Sex</h1>
      <Select
        placeHolder={'sex'}
        options={[
          { value: 'meb', label: 'men' },
          { value: 'women', label: 'women' },
        ]}
      />
      <Button id="button-start" classN="blue" text="Начать" cb={cb} />
    </>
  )
}

export default Tab2
