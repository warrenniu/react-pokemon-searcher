import React from 'react'

const Search = props => {
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input type="text" value={props.searchTerm} onChange={props.changeHandler} className="prompt"/>
        <i className="search icon" />
      </div>
    </div>
  )
}

export default Search
