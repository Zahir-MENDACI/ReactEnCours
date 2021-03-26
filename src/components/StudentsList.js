import React, { useState, useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {getStudents} from '../actions/students'
import Student from './Student';
import firebaseDb from '../firebase'

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
        firebaseDb.child(`etudiants/${i}/signe`).set(
            "0",
            err => {
                if (err) 
                console.log(err)
            }
        )
    }
    
    return (
        <>
            <h1>Liste etudiants</h1>
            <div>
                {students.map(student =>
                (   
                    <Student data={student}/>
                ))}
            </div>
            <button onClick={reset}>reset</button>
        </>
    );
};

export default StudentsList;