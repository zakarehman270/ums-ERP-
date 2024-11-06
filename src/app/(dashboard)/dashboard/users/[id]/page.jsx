import React from 'react'

const page = ({params}) => {
    const {id} = params
  return (
    <div>user details page {id}</div>
  )
}

export default page