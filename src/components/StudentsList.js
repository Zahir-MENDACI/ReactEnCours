import React, { useState, useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {getStudents} from '../actions/students'
import Student from './Student';
import firebaseDb from '../firebase/firebase'
import styled from 'styled-components'
import {useTranslation} from 'react-i18next'

const StudentsList = () => {
    const dispatch = useDispatch()
    const students = useSelector(state => state.students.students)
    useEffect(()=>
    {
        dispatch(getStudents())
    }, [])

    const {t, i18n} = useTranslation()
    
    console.log(students[0])
    
    const reset = () =>
    {
        for (let i=0; i<students.length; i++)
        {
            firebaseDb.database().ref().child(`etudiants/${i}/signe`).set(
                "0",
                err => {
                    if (err) 
                    console.log(err)
                }
            )
            firebaseDb.database().ref().child(`etudiants/${i}/signature`).set(
                "",
                err => {
                    if (err) 
                    console.log(err)
                }
            )
        }
    }

    return (
        <>
            <h1>{t('list')}</h1>
            {students[0] ? (
                <DivList>
                    { students?.map(student =>
                    (   
                        <Student data={student}/>
                    )) }
                </DivList> ) : (
                    <div>
                        <h1>Pas de donnees disponibles</h1>
                        <button> Actualiser </button>
                    </div>)}

            <button onClick={reset}>reset</button>
        </>
    );
};

const DivList = styled.div`
    width: 60vw;
    min-height: 200px;
    border: solid 1px #000;
    border-radius: 10px;
`

export default StudentsList;