let defaultState = {
        auth: false
}

const AUTH_USER = "AUTH_USER";

export const authUserReducer = (state = defaultState, action) => {
    switch (action.type) {
        case AUTH_USER:
            return {...state, auth: true}
        default:
            return state;
    }
}

export const authUserAction = (data) => ({type: AUTH_USER, data: data})
