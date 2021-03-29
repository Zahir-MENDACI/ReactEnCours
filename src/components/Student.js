import React from 'react';
import emailjs from 'emailjs-com';
import{ init } from 'emailjs-com';
import styled from 'styled-components'

const Student = ({data}) => {
    console.log(data)

    init("user_s8PpYDAqUM3HKVcCGPmLc");
    
    const envoi = (e) =>
    {
        let nom = data.firstname
        let email = data.email
        e.preventDefault();
        emailjs.send('default_service', 'template_0q0rkov', {nom, email})
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    }
    
    return (
        <DivLigne>
            <DivInfos>
                <p>{data.firstname} {data.lastname} {data.email}</p>
                <img src={data.signature} />
            </DivInfos>
            <DivButton>
                <Button onClick={envoi}>envoyer</Button>
                {(data.signe == 0) ? <p>Non signé</p> : <p>Signé</p>}
            </DivButton>
        </DivLigne>
    );
};

const DivLigne = styled.div`
    height: 120px;
    width: 100%;
    padding: 10px 30px;
    &:before
    {
        content: '';
        position: absolute;
        width: 50%;
        margin-left: 5%;
        height: 1px;
        background-color: #000;
    }
    &:first-child:before
    {
        height: 0px;
    }

`

const DivInfos = styled.div`
    display: flex;
`

const DivButton = styled.div`
    display: flex
`

const Button = styled.button`

`

export default Student;