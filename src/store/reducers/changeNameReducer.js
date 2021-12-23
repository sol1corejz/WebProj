let defaultState = {
    userName: 'Вадим казаев'
}

const CHANGE_NAME = 'CHANGE_NAME';

export const changeNameReducer = (state = defaultState, action) => {
    switch (action.type) {
        case CHANGE_NAME:
            return {...state, userName: action.data}
        default:
            return state
    }
}

export const changeNameAction = (data) => ({type: CHANGE_NAME, data: data})