import React,{useState, useEffect} from 'react';
import styled from 'styled-components';
import axios from 'axios';
import{useHistory, userHistory} from 'react-router-dom'
const Signin  = props => {
    
    const[username, setUsername] = useState('')
    const[ password, setPassword] = useState('')
    const history = useHistory()
    console.log('history',history)
const submit = e =>{
    e.preventDefault()
    console.log(username)
    console.log(password)
}
axios({
    method: 'POST',
    url:'https://easy-login-api.herokuapp.com/users/login',
    data: {
        username:username,
        password:password
    }
})   
    .then(res =>{
        console.log(res.headers['x-access-token'])
        localStorage.setItem('token',res.headers['x-access-token'])
        history.push('/home/20')
    })
    .catch(err =>{
        console.log(err)
    })

    return (
        <StyledForm onSubmit={submit}>
            <StyledSpan>Signin</StyledSpan>
            <SigninInput placeholder="username" onChange={e => setUsername(e.target.value)}type ='text'></SigninInput>
            <SigninInput placeholder="password" onChange={e => setPassword(e.target.value)} type ='password'></SigninInput>
            <SigninInput type='Submit'></SigninInput>
            
        </StyledForm>
        
        
    )
}
const StyledSpan = styled.span`
color: green;
margin-botton: 12px;
`

const StyledForm = styled.form`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;`



const SigninInput = styled.input`
margin: 6px 0px;
border-radius: 12px;
border: none ;
background-color: #222222;
height: 30px;
color: white;
padding: 0px 6px;
`

export default Signin;