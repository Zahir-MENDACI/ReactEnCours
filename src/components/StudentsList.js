import React, { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {getStudents} from '../actions/students'
import Student from './Student';

const StudentsList = () => {
    const dispatch = useDispatch()
    const students = useSelector(state => state.students.students)
    useEffect(()=>
    {
        dispatch(getStudents())
    }, [])
    return (
        <>
            <h1>Liste etudiants</h1>
            <div>
                {students.map(student =>
                (   
                    <Student data={student}/>
                ))}
            </div>
        </>
    );
};

export default StudentsList;