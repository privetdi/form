import React from 'react'
import folderIcon from '../assets/folder.png'
import './link.scss'

interface Link {
  name: string
  url: string
}

function Links({ name, url }: Link) {
  return (
    <div className="link">
      <img src={folderIcon} alt="" className="img_folder" />
      <a href="URL">{name}</a>
    </div>
  )
}

export default Links
