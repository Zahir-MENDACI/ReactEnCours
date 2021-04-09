import React from 'react';
import {useHistory} from 'react-router-dom'
import styled from 'styled-components'
import fire from '../firebase/firebase'
import Logout from '../Logout.svg'

const Deconnexion = () =>
{
    const history = useHistory()
    const token = localStorage.getItem('token')
    console.log(token)
    const clic = () =>
    {
        localStorage.removeItem('token')
        history.push('/')
    }

    const handleLogout = () =>
    {
        fire.auth().signOut()
    }

    return (
        <div>
            {
                token == "undefined" ? (
                    <StyledLogoutIcon src={Logout} onClick={clic}/>
                ) : (
                    <StyledLogoutIcon src={Logout} onClick={handleLogout}/>
                )
            }
        </div>
    );
};

const StyledLogoutIcon = styled.img`
    width: 30px;
    margin-left: 50px;
`

export default Deconnexion;