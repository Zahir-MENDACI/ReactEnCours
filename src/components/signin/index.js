import React from 'react';
import styled from 'styled-components';

const submit = e =>{
    e.preventDefault()
    console.log(e.target)
}
const Signin  = () => {
    return (
        <StyledForm onSubmit={submit}>
            <StyledSpan>Signin</StyledSpan>
            <SigninInput placeholder="Username" type ='text'></SigninInput>
            <SigninInput placeholder="Password" type ='password'></SigninInput>
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