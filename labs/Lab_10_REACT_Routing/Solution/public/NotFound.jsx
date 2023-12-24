import React from 'react'
import {Link} from 'react-router-dom'

function NotFound() {
  return (
    <div>
        page not found. go to <Link to='/'>main</Link>
    </div>
  )
}

export default NotFound