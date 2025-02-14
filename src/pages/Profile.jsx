import React from 'react'
import { Link, Outlet } from 'react-router-dom'


const Profiles = () => {
  return (
    <div>Profiles
        <hr />
        <br />
        <hr />
        <Link to = '/profile/myaccount'>My Account</Link><br /><br />
        <Link to = '/profile/myysetting'>My Settings</Link>

        <Outlet/>
    </div>
  )
}

export default Profiles