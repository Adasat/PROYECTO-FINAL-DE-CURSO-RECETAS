
import React, { useEffect, useState } from 'react'
import './SearchRecipe.css'
import { getRecipesByArea } from '../services/theMealDb.service'

function Search() {
  const [inputValue, setInputValue] = useState('')
  async function handleClick() {
      
      console.log('first')


      const response = await getRecipesByArea(inputValue)
      console.log(response)
  }

 
  return (
    <div id='input-container'>
    <input
    placeholder='Search recipe'
    onChange={function(e){setInputValue(e.target.value)}}
    value={inputValue}
    />

    <button onClick={ handleClick }>
     Search
    </button>
    </div>
  )
}

export default Search
