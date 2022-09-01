import User from '../User/User'
import './UserGroup.css'
import { useState } from 'react'

function UserGroup () {
  const [isShown, setIsShown] = useState(false)
  const onClick = () => {
    setIsShown(!isShown)
  }
  return (
    <div>
      <button className='btn' onClick={onClick}><span>Show users</span></button>
      {isShown && <User name='Карина' age='28' sex='женский'/> }
    </div>
  )
}

export default UserGroup