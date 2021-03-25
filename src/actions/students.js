import axios from 'axios'
export const DISPLAY_STUDENTS = 'DISPLAY_STUDENTS'

export const displayStudents = student =>( 
{
    type: DISPLAY_STUDENTS,
    payload: student
})

export const getStudents = () => dispatch =>
{
    axios(
        {
            method: 'get',
            url: 'https://apireacttest.herokuapp.com/etudiants'
        }
    ).then(res =>
        {
            dispatch(displayStudents(res.data))
        })
        .catch(err => err)
    
}