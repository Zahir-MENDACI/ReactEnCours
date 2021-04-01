import React from 'react';
import emailjs from 'emailjs-com';
import{ init } from 'emailjs-com';
import styled from 'styled-components'
import {useTranslation} from 'react-i18next'

const Student = ({data}) => {
    console.log(data)

    init("user_s8PpYDAqUM3HKVcCGPmLc");
    
    const {t, i18n} = useTranslation()

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
                    <DivSign>
                        <Button onClick={envoi}>{t('send')}</Button>
                        {(data.signe == 0) ? <p>{t('notsigned')}</p> : <p>{t('signed')}</p>}
                    </DivSign>
                </DivInfos>
                <DivImg>
                    { data.signature ? <img src={data.signature}  style={{width: "120px", height: "120px"}}/> : ""}
                </DivImg>
        </DivLigne>
    );
};

const DivLigne = styled.div`
    height: 120px;
    padding: 10px 30px;
    display: grid;
    grid-template-columns: 3fr 1fr;
    border-bottom: solid 1px #000;
    &:last-child
    {
        border: none
    }
    @media (max-width: 700px) {
    height: 150px
    }

`


const DivInfos = styled.div`
    display: flex;
    flex-direction: column;
`
const DivSign = styled.div`
    display: flex;
    margin-top: 10px;
    line-height: 0px
`

const DivImg = styled.div`
    display: flex;
    justify-content: right;
`

const Button = styled.button`
    margin-right: 30px;
`

export default Student;