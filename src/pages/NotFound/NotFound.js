import React from 'react'
import { Link } from 'react-router-dom'
import './NotFound.css'

export default function NotFound() {
  return (
    <div className='not-found-page'>
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <Link to='/'>Return To Home Page</Link>
    </div>
  )
}
