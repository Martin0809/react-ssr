import React from 'react'

export default function List({ title }) {
  return <div>{title}</div>
}

export async function getServerSideProps() {
  return {
    props: {
      title: 'List Page',
    },
  }
}
