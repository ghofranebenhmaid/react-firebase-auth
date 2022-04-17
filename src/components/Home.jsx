import React, { useState } from "react"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"

const Home = () =>
{
    const [error, setError] = useState("")
    const { currentUser, logout } = useAuth()
    const history = useHistory()

    async function handleLogout ()
    {
        setError("")

        try {
            await logout()
            history.push("/signin")
        } catch {
            setError("Failed to log out")
        }
    }

    return (

        <div className="home ">
            <div className="container ">
                <h2 >Profile</h2>
                { error && <div >{ error }</div> }
                <strong>Email:</strong> { currentUser.email }
                <div className="">
                    <Link to="/update-profile" className="">
                        Update Profile
                    </Link>
                    <button className="btn" variant="link" onClick={ handleLogout }>
                        Log Out
                    </button>
                </div>
            </div>
        </div>

    );
};

export default Home;
