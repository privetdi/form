import React from 'react'
import TabMap from './tabMap'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/store'
import { Modal } from './modal'
import { switchModalIsOpen } from '../../store/reducers/slice'
import Button from '../button'

function Tab4({
  cbNext,
  cbBack,
}: {
  cbNext?: () => void
  cbBack?: () => void
}) {
  const dispatch = useDispatch()
  const successfully = useSelector(
    (state: RootState) => state.store.tab4.successfully
  )
  const modalIsOpen = useSelector(
    (state: RootState) => state.store.tab4.modalIsOpen
  )
  const setDispatchOnClose = () => {
    dispatch(switchModalIsOpen())
  }

  return (
    <>
      <TabMap tab={3} />
      <div className="about">
        <h1 className="taxtAbout">About</h1>
        <textarea className="textareaAbout">Текст</textarea>
        <Modal
          message={successfully ? 'Форма успешно отправлена' : 'Ошибка'}
          isOpen={modalIsOpen}
          onClose={setDispatchOnClose}
          btnText={successfully ? 'На главную' : 'Закрыть'}
          successfully={successfully}
        />
      </div>
      <div className="buttonWraper">
        <Button id="button-back" classN="" text="Назад" cb={cbBack} />
        <Button id="button-next" classN="blue" text="Отправить" cb={cbNext} />
      </div>
    </>
  )
}

export default Tab4
