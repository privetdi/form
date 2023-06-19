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

function App() {
  let [tab, setTab] = useState<number>(2)
  const handleClick = () => {
    setTab(tab + 1)
    console.log(tab)
  }

  let children: JSX.Element | null = null

  switch (tab) {
    case 1:
      children = <Tab1 cb={handleClick} />
      break
    case 2:
      children = <Tab2 cb={handleClick} />
      break
    case 5:
      alert('Перебор')
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
