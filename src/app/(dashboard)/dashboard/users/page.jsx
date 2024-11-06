import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
        user dashboard
        <ul>
            <Link href="/dashboard/users/1"><li>user 1</li></Link> 
            <Link href="/dashboard/users/2"><li>user 2</li></Link> 
            <Link href="/dashboard/users/3"><li>user 3</li></Link> 
            <Link href="/dashboard/users/4"><li>user 4</li></Link> 
        </ul>
    </div>
  )
}

export default page