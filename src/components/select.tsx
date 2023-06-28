import './select.scss'

import React, { Component } from 'react'
import Select from 'react-select'
const Countries = [
  { label: 'man', value: 'man' },
  { label: 'women', value: 'women' },
]
class SelectComponent extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6">
            <Select
              className="custom-select"
              options={Countries}
              placeholder="Не выбрано"
            />
          </div>
          <div className="col-md-4"></div>
        </div>
      </div>
    )
  }
}
export default SelectComponent
