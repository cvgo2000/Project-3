import React from 'react'
import LogIn from '../components/LogIn/LogIn'
import SignIn from '../components/SignUp/SignUp'

const UserSignIn = () => {
    return (
        <div className="container">
            <h1>Please log in or sign up</h1>
            <LogIn />
            <SignIn />
        </div>
    )
}

export default UserSignIn
