// routing
import { Link } from "react-router-dom";
// hooks
import { useState } from "react";

const LoginForm = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const handleInput = (event) => {
        const { target } = event;
        // REGISTER ON EACH INPUT FIELD ITS CONTENT BY USING TARGET VALUE
        // it works now but it register one letter after (so if you write "ff" it logs "f")
        if (target.id === "username") {
            setUsername(target.value);
            console.log(target.id + ": " + username);
        } else if (target.id === "password") {
            setPassword(target.value);
            console.log(target.id + ": " + password);
        }
    }

    return <div>
        <form className="login-form">
            <label className="login-form-label" htmlFor="username">Username</label>
            <input className="login-form-input" type="text" placeholder="Username" id="username" onChange={handleInput} autoComplete="off" />
            <label className="login-form-label" htmlFor="password">Password</label>
            <input className="login-form-input" type="password" placeholder="Password" id="password" onChange={handleInput} autoComplete="off" />
            <Link className="login-form-btn-link" to='/home'><button className="login-form-btn">Log in</button></Link>
        </form>
    </div>
}

export default LoginForm;