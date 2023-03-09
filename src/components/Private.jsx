import React, {useContext} from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from '../context/auth.context'


function Private({children}) {

    const {loading, loggedIn} = useContext (AuthContext) 

    if(loading) return <p>Loading...</p>

    if (!loggedIn) {
        return <Navigate to="/login"/> 
    } else {   // if logged in 
    return children   // the content is the children  (project will be wrapped with this component in app.jsx)
    
    }


}

export default Private