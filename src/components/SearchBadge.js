import React from 'react'

// Assets
import SearchIcon from '../assets/images/search-icon.svg'
import '../assets/sass/components/searchbadge.scss'

const SearchBadge = () => {

  const onSearch = (ev) => {
    ev.preventDefault()
    console.log('submit event')
  }

  return (
    <form className="SearchBadge__container" onSubmit={onSearch}>
      <div className="SearchBadge">
        <img className="SearchBadge__icon" src={SearchIcon} alt="search icon" loading="lazy"/>
        <input className="SearchBadge__input fs-normal" type="text" placeholder="Buscar por nombre" id="search-input"/>
      </div>
      <button className="SearchBadge__button fs-normal" type="submit">Buscar</button>
    </form>
  )
}

export default SearchBadge
