import React from 'react'
import Image from 'next/image'

const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
    <div className="navbar-start">
        <div className="dropdown">
        <label tabIndex={0} className="btn btn-ghost btn-circle">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
        </label>
        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li><a>Homepage</a></li>
            <li><a>Portfolio</a></li>
            <li><a>About</a></li>
        </ul>
        </div>
    </div>
    <div className="navbar-center">
        <a className="btn btn-ghost normal-case text-xl">Nephrite</a>
    </div>
    <div className="navbar-end">
        <button className="btn btn-ghost btn-circle">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
        </button>
        <button className="btn btn-ghost btn-circle">
        <div className="indicator">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
            <span className="badge badge-xs badge-primary indicator-item"></span>
        </div>
        </button>
        <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
        <Image
        src="data:image/jpeg;base64,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"
        width={500}
        height={500}
        alt="Picture of the user"
        />
        </div>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
    </div>
    </div>
  )
}

export default Navbar