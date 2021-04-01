import React from 'react';
import {useTranslation} from 'react-i18next'
import styled from 'styled-components'

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

    const {t, i18n} = useTranslation()
    
    return (
        <Login className='login'>
            <LoginContainer className='loginContainer'>
                <Label>Email</Label>
                <Input type="text" autoFocus required value={email} onChange={(e) => setEmail(e.target.value)}/>
                <P className="errorMsg">{emailError}</P>
                <Label>{t('password')}</Label>
                <Input type="password" autoFocus required value={password} onChange={(e) => setPassword(e.target.value)}/> 
                <P className="errorMsg">{passwordError}</P>
                <BtnContainer className="btnContainer">
                    <Button onClick={hadndleLogin} className="button">{t('login')}</Button>
                </BtnContainer>
            </LoginContainer>
        </Login>
    );
};

const Login = styled.section`
    width: 100%;
    padding: 0 ;
    display: flex;
`

const LoginContainer = styled.div`
    padding: 60px;
    margin: auto;
    width: 100%;
    max-width: 520px;
    min-height: 600px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: radial-gradient(
      ellipse at left bottom,
      rgba(22, 24, 47, 1) 0%,
      rgba(38, 20, 72, 0.9) 59%,
      rgba(17, 27, 75, 0.9) 100%
    );
    box-shadow: 0 50px 70px -20px rgba(0, 0, 0, 0.8);
`
const Label = styled.label`
    color: white;
    margin: 14px 0;
    display: block;
    font-size: 22px;
    line-height: 1;
`
const Input = styled.input`
    width: 100%;
    border: none;
    outline: none;
    font-size: 19px;
    padding: 10px;
    background: rgba(255, 255, 255, 0.1);
    color: #fff;
    letter-spacing: 1px;
`
const BtnContainer = styled.div`
    width: 100%;
    padding: 24px 0;
    display: flex;
`

const P = styled.p`
    margin: 14px 0 0 0;
    text-align: right;
    color: #fff;
`

const Button = styled.button`
    background: #603bbb;
    width: 100%;
    padding: 20px 40px;
    display: flex;
    align-items: center;
    justify-content: center;
`

export default LoginForm;