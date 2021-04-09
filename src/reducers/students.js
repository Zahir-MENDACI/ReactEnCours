import {DISPLAY_STUDENTS}  from '../actions/students'

const initialState = {
    students: []
}

export default (state = initialState, action) =>
{
    switch(action.type){
        case DISPLAY_STUDENTS:
            return{
                ...state,
                students: action.payload
            }
        default:
            return state
    }
}