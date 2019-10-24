import * as actionType from './../constants';

const defaultState = {
    profileInfo:{}
}

const registrationReducer = (state=defaultState ,action)=>{
    switch(action.type){
        case actionType.USER_REGISTRATION_COMPLETE:
            return {
                ...state,
                profileInfo:action.payload
            }
        default:
            return state
    }
} 

export default registrationReducer