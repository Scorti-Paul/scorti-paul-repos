import React from 'react'
import { Outlet } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import avatar from './../assets/avatar.png'

const Repo = () => {
  return (
    <>
      <Helmet
        title='home'
        description='this is the homepage'
        keyword='fetct, axios, nest route'
        largeTwitterCard={true}
        imageCard={avatar}
      />
      <div>
        <Outlet />
      </div>
    </>
  )
}

export default Repo