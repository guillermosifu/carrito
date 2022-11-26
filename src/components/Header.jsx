
import React from 'react'

const Header = ({titulito,store,slogan}) => {
  return (
    <header>
        <h1>{titulito}</h1>
        <h2>{store}</h2>
        <h3>{slogan}</h3>
      
    </header>
  )
}

export default Header
