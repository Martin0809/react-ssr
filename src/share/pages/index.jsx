import React from 'react'
import { Link } from 'react-router-dom'

export default function Index({ title }) {
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
      {title}
    </div>
  )
}

export async function getServerSideProps() {
  return {
    props: {
      title: 'Home Page',
    },
  }
}
