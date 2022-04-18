
import React, {memo} from 'react'
import UserCard from './UserCard';

const Users = ({users, addUser}) => {
    console.log("users rendered");
  return (
    <div>
        <button onClick={addUser} >Add User</button>

        <div style={{display : "flex", flexWrap : "wrap"}} >
        {users?.map((user, index) => {
           return (   
                    <UserCard key = {index} user = {user} />
           )   
        } )}
    </div>
    </div>
  )
}

    // users component i memo ile sarmallayarak, UseMemoCallback her calistiginda users in render edilmesini engelledik. ama bu tek basina yeterli degil
export default memo(Users);