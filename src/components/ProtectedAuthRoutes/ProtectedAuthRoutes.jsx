import React, { useContext } from 'react'
import { UserContext } from '../../Context/user'
import Home from '../Home/Home'

export default function ProtectedAuthRoutes(props) {
    const userContext = useContext(UserContext)
    return (
        <>
            {userContext.userToken ? <Home></Home>: props.children}
        </>
    )
}
