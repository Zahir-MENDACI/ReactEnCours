import React from 'react';

const LoginForm = (props) => {
    const {
        email,
        setEmail,
        password,
        setPassword,
        hadndleLogin,
        emailError,
        passwordError,
    } = props
    return (
        <section className='login'>
            <div className='loginContainer'>
                <label>Email</label>
                <input type="text" autoFocus required value={email} onChange={(e) => setEmail(e.target.value)}/>
                <p className="errorMsg">{emailError}</p>
                <label>Password</label>
                <input type="password" autoFocus required value={password} onChange={(e) => setPassword(e.target.value)}/> 
                <p className="errorMsg">{passwordError}</p>
                <div className="btnContainer">
                    <>
                        <button onClick={hadndleLogin} className="button">Sign In</button>
                    </>
                </div>
            </div>
        </section>
    );
};

export default LoginForm;