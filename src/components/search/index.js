import {Button, Input} from 'antd'
import React from 'react'
import CityList from '../cityList'
import './style.scss'
const Search = () => {
  return (
    <div className="search-container">
      <div className="input-container">
        <input type="text" placeholder="Search location" />
        <Button className="search-button">Search</Button>
      </div>
      <div className="list">
        <CityList />
        <CityList />
        <CityList />
      </div>
    </div>
  )
}

export default Search
