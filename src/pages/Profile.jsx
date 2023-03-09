/* import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../context/auth.context'

function Profile() {
  const {loggedIn, user, logout} = useContext(AuthContext)
 

  return (
    <div>
      <h1>Profile</h1>
      <h3>Hi {user.name}</h3>

      {user.name ? (
        <Link to="/question1">Redo Questionnaire</Link>
      ) : (
        <Link to="/question1">Start Questionnaire</Link>
      )}
    </div>
  )
}

export default Profile */



import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../context/auth.context'

function Profile() {
  const { user } = useContext(AuthContext)


  const userDidQuestionnaire = user && user.questionnaireCompleted  // assuming user object has a "questionnaireCompleted" property

  return (
    <div>
      <h1>Profile</h1>
    
      <h3>Hi {user.name}</h3>
  
   
 
      {userDidQuestionnaire ? (
        <Link to="/profile/questionnaire">Redo Questionnaire</Link>
      ) : (
        <Link to="/profile/questionnaire">Start Questionnaire</Link>
      )}
    </div>
  )
}

export default Profile