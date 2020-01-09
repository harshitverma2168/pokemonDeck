import React from 'react'
import './search.Styles.css'
export const SeacrhBox = ({ placeholder, changeHandler }) => 
    (<input type="text"
        className="search"
        placeholder={placeholder}
        onChange={changeHandler}></input>);


