import React, { Component } from 'react'
import './select.scss'

import Select from 'react-select'
import 'bootstrap/dist/css/bootstrap.min.css'
const Countries = [
  { label: 'Albania', value: 355 },
  { label: 'Argentina', value: 54 },
  { label: 'Austria', value: 43 },
  { label: 'Cocos Islands', value: 61 },
  { label: 'Kuwait', value: 965 },
  { label: 'Sweden', value: 46 },
  { label: 'Venezuela', value: 58 },
]
class Select extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6">
            <Select options={Countries} />
          </div>
          <div className="col-md-4"></div>
        </div>
      </div>
    )
  }
}
export default Select
