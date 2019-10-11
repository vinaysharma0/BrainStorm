import * as actionType from './constants'

export const loginRequest = (userCreds) => ({
    type: actionType.USER_LOGIN_REQUEST,
    payload: userCreds
})

export const loginRequestSuccess = (data) => ({
    type: actionType.USER_LOGIN_REQUEST_SUCCESS,
    payload: data
})

export const logoutRequest = () => ({
    type: actionType.USER_LOGOUT_REQUEST
})