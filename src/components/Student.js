import React from 'react';
import emailjs from 'emailjs-com';
import{ init } from 'emailjs-com';

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
        <div>
            <p>{data.firstname}</p>
            <button onClick={envoi}>envoyer</button>
        </div>
    );
};

export default Student;