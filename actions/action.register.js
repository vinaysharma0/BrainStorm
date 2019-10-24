import * as actionType from './../constants';

export const registrationComplete = (user) => ({
    type:actionType.USER_REGISTRATION_COMPLETE,
    payload:user
})