import React from 'react';
import {useHistory} from 'react-router-dom'
import styled from 'styled-components'

const Deconnexion = () =>
{
    const history = useHistory()
    const token = localStorage.getItem('token')

    const clic = () =>
    {
        localStorage.removeItem('token')
        history.push('/login')
    }

    return (
        <div>
            {
                token ? (
                    <StyledLogoutIcon onClick={clic}>Deconnecter</StyledLogoutIcon>
                ) : null
            }
        </div>
    );
};

const StyledLogoutIcon = styled.button`
`

export default Deconnexion;