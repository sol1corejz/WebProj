let defaultState = {
    userId: 0,
    userName: ''
}

const CHANGE_NAME = 'CHANGE_NAME';

export const changeNameReducer = (state = defaultState, action) => {
    switch (action.type) {
        case CHANGE_NAME:
            return {...state, userName: action.name, userId: action.id}
        default:
            return state
    }
}

export const changeNameAction = (data) => {
    return {type: CHANGE_NAME, name: data.name, id: data.id}
}