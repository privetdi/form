import React from 'react'
import { useDispatch } from 'react-redux'
import { RootState } from '../../store/store'
import { useSelector } from 'react-redux'
import {
  addAdvantages,
  dispatchRemoveAdvantages,
  setAdvantages,
  setCheckBox,
  setRadio,
} from '../../store/reducers/slice'
import Profil from '../profil'
import Input from '../input'
import Button from '../button'
import TabMap from './tabMap'
import './tabs.scss'
import SelectComponent from '../select'
import ButtonRemove from '../buttonRemove'
import Checkbox from '../checkbox'

function Tab3({
  cbNext,
  cbBack,
}: {
  cbNext?: () => void
  cbBack?: () => void
}) {
  const dispatch = useDispatch()
  const phone = useSelector((state: RootState) => state.store.tab3.phone)
  const email = useSelector((state: RootState) => state.store.tab1.email)
  const advantages = useSelector(
    (state: RootState) => state.store.tab3.advantages
  )
  const chekbox = useSelector((state: RootState) => state.store.tab3.chekbox)
  const radio = useSelector((state: RootState) => state.store.tab3.radio)

  const arrayInput = Object.entries(advantages).map(([key, value]) => ({
    [key]: value,
  }))

  const setDispatchSetAdvantages = (
    e: React.ChangeEvent<HTMLInputElement>,
    id: number
  ) => {
    e.stopPropagation()
    dispatch(setAdvantages({ value: e.target.value, idItem: id }))
  }

  const setDispatchAddAdvantages = () => {
    dispatch(addAdvantages({}))
  }
  const setDispatchRemoveAdvantages = (id: number) => {
    dispatch(dispatchRemoveAdvantages({ id: id }))
  }

  const setDispatchSetCheckBox = (id: number) => {
    dispatch(setCheckBox({ idItem: id }))
  }
  const setDispatchSetRadio = (id: number) => {
    dispatch(setRadio({ idItem: id }))
  }
  return (
    <>
      <TabMap tab={3} />
      <h1>Advantages</h1>
      {arrayInput
        ? arrayInput.map((item) => (
            <div className="advantagesInput">
              <Input
                id={+Object.keys(item)[0].split('_')[1]}
                label=""
                classN="phone"
                defaultValue="123"
                placeholder="placeholder"
                cb={setDispatchSetAdvantages}
                value={item[Object.keys(item)[0]].value}
              />
              <ButtonRemove
                id={+Object.keys(item)[0].split('_')[1]}
                cb={setDispatchRemoveAdvantages}
              />
            </div>
          ))
        : null}

      <Button
        id="button add"
        classN="buttonAdd"
        text="+"
        cb={setDispatchAddAdvantages}
      />
      <div className="checkboxgroup">
        <h1 className="lableChekboxGroup">Checkbox group</h1>
        <Checkbox
          idGroue="checkbox"
          id={1}
          value={chekbox.checkbox_1.value}
          label="123"
          cb={setDispatchSetCheckBox}
        />
        <Checkbox
          idGroue="checkbox"
          id={2}
          value={chekbox.checkbox_2.value}
          label="123"
          cb={setDispatchSetCheckBox}
        />
        <Checkbox
          idGroue="checkbox"
          id={3}
          value={chekbox.checkbox_3.value}
          label="123"
          cb={setDispatchSetCheckBox}
        />
      </div>
      <div className="checkboxgroup">
        <h1 className="lableChekboxGroup">Checkbox group</h1>
        <Checkbox
          idGroue="radio"
          id={1}
          value={radio.value === 1}
          label="123"
          cb={setDispatchSetRadio}
        />
        <Checkbox
          idGroue="radio"
          id={2}
          value={radio.value === 2}
          label="123"
          cb={setDispatchSetRadio}
        />
        <Checkbox
          idGroue="radio"
          id={3}
          value={radio.value === 3}
          label="123"
          cb={setDispatchSetRadio}
        />
      </div>

      <div className="buttonWraper">
        <Button id="button-back" classN="" text="Назад" cb={cbBack} />
        <Button id="button-next" classN="blue" text="Далее" cb={cbNext} />
      </div>
    </>
  )
}

export default Tab3
