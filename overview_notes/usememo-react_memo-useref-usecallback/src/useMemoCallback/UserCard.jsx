
import React from 'react'

const UserCard = ({user}) => {
    
  return (
    <div>
        <img style={{width : "200px"}} src={`https://avatars.dicebear.com/v2/avataaars/${user.id}.svg`} alt="" />
        <p>{user.name} </p>
    </div>
  )
}

export default UserCard;