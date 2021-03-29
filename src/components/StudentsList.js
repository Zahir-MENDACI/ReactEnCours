import React, { useState, useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {getStudents} from '../actions/students'
import Student from './Student';
import firebaseDb from '../firebase/firebase'
import styled from 'styled-components'

const StudentsList = () => {
    const dispatch = useDispatch()
    const students = useSelector(state => state.students.students)
    useEffect(()=>
    {
        dispatch(getStudents())
    }, [])

    console.log(students.length)
    
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
            <h1>Liste etudiants</h1>
            <DivList>
                {students?.map(student =>
                (   
                    <Student data={student}/>
                ))}
            </DivList>
            <button onClick={reset}>reset</button>
        </>
    );
};

const DivList = styled.div`
    width: 60vw;
    border: solid 1px #000;
    border-radius: 10px;
`

export default StudentsList;