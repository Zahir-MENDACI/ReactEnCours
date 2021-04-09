import React, { useState, useEffect} from 'react';
import LoginForm from '../components/LoginForm';
import fire from '../firebase/firebase'
import axios from 'axios'
import './login.css'
import Prof from './prof';
import Signature from './signature';

const Login = ({history}) => {

    const [user, setUser] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')

    const clearInputs = () =>
    {
        setEmail('')
        setPassword('')
    }

    const clearErrors = () =>
    {
        setEmailError('')
        setPasswordError('')
    }

    const hadndleLogin = () =>
    {
        clearErrors()

        if (email == "prof@test.fr" && password == "prof")
        {
            axios(
                {
                    method: 'POST',
                    url: 'https://easy-login-api.herokuapp.com/users/login',
                    data: {
                        username: user,
                        password: password
                    }
                }
            ).then(res => 
            {
                localStorage.setItem('token', res.headers['x-access-token'])
                history.push('prof')
            }).catch(err =>
                {
                    console.log(err)
                })
        }
        else
        {
            fire
                .auth()
                .signInWithEmailAndPassword(email, password)
                .catch(err =>
                    {
                        switch(err.code)
                        {
                            case "auth/invalid-email":
                            case "auth/user-disabled":
                            case "auth/user-not-found":
                                setEmailError(err.message);
                                break;
                            case "auth/wrong-password":
                                setPasswordError(err.message)
                                break;
                        }
                    })
        }
    }

    const handleSignup = () =>
    {
        clearErrors()
        fire
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .catch(err =>
                {
                    switch(err.code)
                    {
                        case "auth/email-already-in-use":
                        case "auth/invalid-email":
                            setEmailError(err.message);
                            break;
                        case "auth/weak-password":
                            setPasswordError(err.message)
                            break;
                    }
                })
    }

    const handleLogout = () =>
    {
        fire.auth().signOut()
    }

    const authListener = () =>
    {
        fire.auth().onAuthStateChanged(user =>
            {
                if(user)
                {
                    clearInputs()
                    setUser(user)
                    console.log(user.email)
                }
                else
                {
                    setUser("")
                }
            })
    }

    useEffect(()=>
    {
        authListener()
    }, [])
    
    return (
        <div>
            {user ? (
                <Signature handleLogout={handleLogout}/>
                ) : localStorage.getItem('token') ? (
                    <Prof/>
                ) : (
                <LoginForm 
                    email={email} 
                    setEmail={setEmail} 
                    password={password} 
                    setPassword={setPassword} 
                    hadndleLogin={hadndleLogin} 
                    emailError={emailError}
                    passwordError={passwordError}
                />
            )}
        </div>
    );
};

export default Login;