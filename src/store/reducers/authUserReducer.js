let defaultState = {
    user: {
        mail: 'aboba@mail.ru',
        password: '12345',
        auth: false
    }
}

const AUTH_USER = "AUTH_USER";
const REG_USER = "REG_USER";

export const authUserReducer = (state = defaultState, action) => {
    switch (action.type) {
        case AUTH_USER:
            return {...state, auth: true}
        case REG_USER:
            return {...state, user: {mail: action.data.mail, password: action.data.password , auth: action.data.auth}}
        default:
            return state;
    }
}

export const authUserAction = (data) => ({type: AUTH_USER, data: data})
export const newUserAction = (data) => ({type: REG_USER, data: data})