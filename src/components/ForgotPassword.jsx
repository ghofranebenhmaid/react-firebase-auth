import React, { useRef, useState } from "react"
import { useAuth } from "../contexts/AuthContext"
import { Link } from "react-router-dom"

export default function ForgotPassword ()
{
    const emailRef = useRef()
    const { resetPassword } = useAuth()
    const [error, setError] = useState("")
    const [message, setMessage] = useState("")
    const [loading, setLoading] = useState(false)

    async function handleSubmit (e)
    {
        e.preventDefault()

        try {
            setMessage("")
            setError("")
            setLoading(true)
            await resetPassword(emailRef.current.value)
            setMessage("Check your inbox for further instructions")
        } catch {
            setError("Failed to reset password")
        }

        setLoading(false)
    }

    return (
        <div className="main">
            <div className="signin">
                <form action="" onSubmit={ handleSubmit }>
                    <h1>Password Reset</h1>
                    { error && <alert variant="danger">{ error }</alert> }
                    { message && <alert variant="success">{ message }</alert> }
                    <label for='email'>Email</label>
                    <input type="email" id="email" ref={ emailRef } required />
                    {/* <label for='password'>Password</label>
                <input type="password" id="password" name="password" ref={ passwordRef } required/> */}
                    <button className='btn' disabled={ loading } type="submit" > Reset Password</button>
                    <Link to="/signin">Login</Link>
                    <h6 className="signin__notregister">Not yet register? <span className="signin__link" > <Link to="/signup">sign up</Link></span></h6>
                </form>
            </div>
        </div>
    )
}
