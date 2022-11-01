import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <Link to='/'>
        <span>Scorti</span>
        <small>repos</small>
      </Link>
      <Link to='/'>Repositories</Link>
      <Link to='/error-boundary'>Error Boundary</Link>
    </div>
  )
}

export default Navbar