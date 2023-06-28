import React, { useState } from 'react'
import Layout from './layout/pages'
import Profil from './components/profil'
import Input from './components/input'
import Button from './components/button'
import { useSelector } from 'react-redux'
import { RootState } from './store/store'
import { useDispatch } from 'react-redux'
import { setEmail, setPhone } from './store/reducers/slice'
import Tab1 from './components/tabs/tab1'
import Tab2 from './components/tabs/tab2'
import Tab3 from './components/tabs/tab3'
import Tab4 from './components/tabs/tab4'

function App() {
  let [tab, setTab] = useState<number>(1)
  const buttonNext = () => {
    setTab(tab + 1)
  }
  const buttonBack = () => {
    if (tab > 1) setTab(tab - 1)
  }

  let children: JSX.Element | null = null

  switch (tab) {
    case 1:
      children = <Tab1 cbNext={buttonNext} />
      break
    case 2:
      children = <Tab2 cbNext={buttonNext} cbBack={buttonBack} />
      break
    case 3:
      children = <Tab3 cbNext={buttonNext} cbBack={buttonBack} />
      break
    case 4:
      children = <Tab4 cbNext={buttonNext} cbBack={buttonBack} />
      break
    default:
      alert('Нет таких значений')
  }

  return (
    <div className="App">
      <Layout>{children}</Layout>
    </div>
  )
}

export default App
