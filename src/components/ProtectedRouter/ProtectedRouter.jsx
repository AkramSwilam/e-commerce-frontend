import React, { useContext } from 'react'
import { UserContext } from '../../Context/user'
import Login from "../Login/Login"

export default function ProtectedRouter(props) {
    let userContext= useContext(UserContext);
  return (
    <>
    {
        userContext.userToken? props.children : <Login></Login>
    }
    </>
  )
}
