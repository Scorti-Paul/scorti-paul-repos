import React from 'react'
import { Helmet } from 'react-helmet'
import { Outlet } from 'react-router-dom'
import avatar from './../assets/avatar.png'

const Home = () => {
  return (
    <>
      <Helmet
        title='home'
        description='this is the homepage'
        keyword='fetct, axios, nest route'
        largeTwitterCard={true}
        imageCard={avatar}
      />
      <div>Home
        <Outlet />

      </div>
    </>
  )
}

export default Home