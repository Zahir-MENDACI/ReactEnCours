import axios from 'axios'
import firebaseDb from '../firebase'
export const DISPLAY_STUDENTS = 'DISPLAY_STUDENTS'

export const displayStudents = student =>( 
{
    type: DISPLAY_STUDENTS,
    payload: student
})

export const getStudents = () => dispatch =>
{
    firebaseDb.child('etudiants').on('value', snapshot=>
    {
        if (snapshot.val() != null)
        {
            dispatch(displayStudents(snapshot.val()))
            
        }
    })
}