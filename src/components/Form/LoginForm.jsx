const LoginForm = () => {
    return <div>
        <form className="login-form">
            <label className="login-form-label" htmlFor="username">Username</label>
            <input className="login-form-input" type="text" placeholder="Username" id="username" autoComplete="off" />
            <label className="login-form-label" htmlFor="password">Password</label>
            <input className="login-form-input" type="password" placeholder="Password" id="password" autoComplete="off" />
            <button className="login-form-btn">Log in</button>
        </form>
    </div>
}

export default LoginForm;