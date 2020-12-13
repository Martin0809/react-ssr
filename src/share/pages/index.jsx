import React from 'react'
import { Link } from 'react-router-dom'

export default function Index() {
  return (
    <div onClick={() => console.log('Home Page')}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/list">List</Link>
        </li>
      </ul>
      Home Page
    </div>
  )
}
