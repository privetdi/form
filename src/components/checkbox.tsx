import React from 'react'
import './checkbox.scss'

function Checkbox({
  id,
  idGroue,
  value,
  cb,
  label,
}: {
  id: number
  idGroue: string
  value: boolean
  cb: (id: number) => void
  label: string
}) {
  return (
    <label className="lableCheckBox">
      <button
        id={`field-${idGroue}-group-option-${id}`}
        className={`input ${idGroue}  ${value ? 'active' : 'noActive'}`}
        onClick={() => {
          cb(id)
        }}
      />
      {label}
    </label>
  )
}

export default Checkbox
