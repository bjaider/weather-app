import {Button, Input} from 'antd'
import React from 'react'
import './style.scss'
const Search = () => {
  return (
    <div className="search-container">
      <div className="input-container">
        <input type="text" placeholder="Search location"/>
        <Button className="search-button">Search</Button>
      </div>
    </div>
  )
}

export default Search
