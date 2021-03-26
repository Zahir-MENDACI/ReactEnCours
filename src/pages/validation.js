import React from 'react';
import firebaseDb from '../firebase'

const Validation = (props) => {
    console.log(props)

    firebaseDb.child(`etudiants/${props.match.params.id}/signe`).set(
        "1",
        err => {
            if (err) 
            console.log(err)
        }
    )

    return (
        <div>
            <h1>Validation</h1>
            <p>{props.match.params.id}</p>
            <p>signé!!</p>
        </div>
    );
};

export default Validation;