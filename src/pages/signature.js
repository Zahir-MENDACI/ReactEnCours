import React, { useEffect, useState,useRef } from 'react';
import {useHistory} from 'react-router-dom'
import SignaturePad from "react-signature-canvas"
import styled from 'styled-components'
import fire from '../firebase/firebase'

const Signature = () => {

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

            alert('Signé')
            
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
        <Content>
            {/* <button onClick={handleLogout}>Deconnecter</button> */}
            {/* <div style={{border: "solid 3px #000", width: "800px"}}>
                <Sign canvasProps={{width: 800, height: 600}} ref={canvasRef}/>        
            </div>
            <button>Valider</button> */}
            {user ? (
            <div >
                <Sign>
                    <SignaturePad
                    ref={(ref) => { sigPad = ref }}  minWidth={2} minDistance={1} canvasProps={{style: {width: "300px", height: "300px"}}}/>
                </Sign>
                <div>
                    <button  onClick={clear}>
                    Effacer
                    </button>
                    <button  onClick={trim}>
                    Signer
                    </button>
                </div>
            </div>):(
                history.push('/login')
            )}
        </Content>
    );
};

const Content = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center
`

const Sign = styled.div`
    border: solid 1px #000;
    display: inline-block
`

export default Signature;


