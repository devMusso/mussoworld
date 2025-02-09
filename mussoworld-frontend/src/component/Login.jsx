import { useState } from "react"
import { useAuth } from "../context/AuthContext"
import { useNavigate } from "react-router-dom"



export default function Login() {

    const [userid, setUserid] = useState("")
    const [password, setPassword] = useState("")
    const [message, setMessage] = useState(false)
    const authContext = useAuth();
    const navigate = useNavigate();

    function handleLogin() {
        if (authContext.login(userid, password)) {
            setMessage(false)
            navigate("/main")
        } else {
            setMessage(true)
        }
    }

    function handleChangeUserid(e) {
        setUserid(e.target.value)
    }

    function handleChangePassword(e) {
        setPassword(e.target.value)
    }

    return (
        <div className="container d-flex flex-column justify-content-center align-items-center">
            <h1 className="mb-5">Hello Musso World!</h1>
            {message && <div className="alert alert-danger w-50">Invalid User ID or Password</div>}
            <div className="form w-50">
                <div className="form-floating mb-3  mt-3">
                    <input type="text" name="userid" id="userid" className="form-control" placeholder="" onChange={handleChangeUserid} />
                    <label htmlFor="userid">User ID</label>
                </div>

                <div className="form-floating mb-3  mt-3">
                    <input type="password" name="password" id="password" className="form-control" placeholder="" onChange={handleChangePassword} />
                    <label htmlFor="password" >Password</label>
                </div>
                <button type="button" className="btn btn-success w-100" onClick={handleLogin}>Login</button>
            </div>
        </div>
    )
}