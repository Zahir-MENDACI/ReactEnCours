import React, { useEffect, useState,useRef } from 'react';
import {useHistory} from 'react-router-dom'
import SignaturePad from "react-signature-canvas"
import styled from 'styled-components'
import fire from '../firebase/firebase'

const Signature = ({handleLogout}) => {

    const [user, setUser] = useState('')
    const history = useHistory()
    
    var sigPad = {}

    
    const [trimmedDataURL, setTrimmedDataURL] = useState(null)

    const clear = () => {
      sigPad.clear()
    }

    const trim = () => {
        if (!sigPad.isEmpty())
        {
            setTrimmedDataURL(sigPad.getTrimmedCanvas().toDataURL('image'))

            fire.database().ref().child('etudiants').orderByChild('email').equalTo('etudiant1@test.com').on("value", function(snapshot) 
            {
                snapshot.forEach((function(child) 
                { 
                    key = child.key
                }))
            });

            fire.database().ref().child(`etudiants/${key}/signe`).set(
                "1",
                err => 
                {
                    if (err) 
                    console.log(err)
                })
            fire.database().ref().child(`etudiants/${key}/signature`).set(
                trimmedDataURL,
                err => 
                {
                    if (err) 
                    console.log(err)
                })
        }
        else
        {
            alert('Signature vide')
        }

      }


      var key = 0
      

   


    console.log(user)
    
    const authListener = () =>
    {
        fire.auth().onAuthStateChanged(user =>
            {
                if(user)
                {
                    setUser(user)
                    console.log(user.email)
                }
                else
                {
                    setUser("")
                    history.push('/login')
                }
            })
    }

    useEffect(()=>
    {
        authListener()
    }, [])
    
    return (
        <>
            <button onClick={handleLogout}>Deconnecter</button>
            {/* <div style={{border: "solid 3px #000", width: "800px"}}>
                <Sign canvasProps={{width: 800, height: 600}} ref={canvasRef}/>        
            </div>
            <button>Valider</button> */}

            <div >
                <div >
                    <SignaturePad
                    ref={(ref) => { sigPad = ref }}  />
                </div>
                <div>
                    <button  onClick={clear}>
                    Clear
                    </button>
                    <button  onClick={trim}>
                    Trim
                    </button>
                </div>
                {trimmedDataURL
                    ? <img 
                    src={trimmedDataURL} />
                    : null}
            </div>
        </>
    );
};

export default Signature;


