import React, { ReactNode } from 'react'
import './pages.scss'

type ChildrenProps = {
  children: ReactNode
}

const Layout = ({ children }: ChildrenProps) => {
  return <div className="layout">{children}</div>
}

export default Layout
