import React, { useRef, useState } from "react"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"

export default function UpdateProfile ()
{
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { currentUser, updatePassword, updateEmail } = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    function handleSubmit (e)
    {
        e.preventDefault()
        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError("Passwords do not match")
        }

        const promises = []
        setLoading(true)
        setError("")

        if (emailRef.current.value !== currentUser.email) {
            promises.push(updateEmail(emailRef.current.value))
        }
        if (passwordRef.current.value) {
            promises.push(updatePassword(passwordRef.current.value))
        }

        Promise.all(promises)
            .then(() =>
            {
                history.push("/")
            })
            .catch(() =>
            {
                setError("Failed to update account")
            })
            .finally(() =>
            {
                setLoading(false)
            })
    }

    return (
        <div className="main">

            <div className="signin">
                { error && <div >{ error }</div> }
                <form action="" onSubmit={ handleSubmit }>
                    <h1>Sign in</h1>
                    <label htmlFor='email'>Email</label>
                    <input ref={ emailRef } required type="email" id="email" name="email" />
                    <label htmlFor='password'>Password</label>
                    <input ref={ passwordRef } required type="password" id="password" name="password" />
                    <label htmlFor='password'>Password Confirmation</label>
                    <input ref={ passwordConfirmRef } required type="password" id="password" name="password" />
                    <button className='btn' disabled={ loading } type="submit" > Reset Password</button>
                    <h6 className="signin__notregister" >Not yet register? <span className="signin__link" > <Link to="/signup">sign up</Link></span></h6>

                    <div className="signin__notregister">
                        <h6   ><span className="signin__link" >  <Link to="/signin">Login</Link></span></h6>
                        <h6><span className="signin__link" > <Link to="/">Cancel</Link></span></h6>
                    </div>
                </form>
            </div>
        </div>
    )
}
