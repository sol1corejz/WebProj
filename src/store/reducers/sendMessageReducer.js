const defaultState = {
        messages: [],
        id: 0
}

const SEND_MESSAGE = 'SEND_MESSAGE'
const FIND_MESSAGE = 'FIND_MESSAGE'

export const sendMessageReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            if (action.data.text.length !== 0){
                return {...state, messages: [...state.messages, action.data]}
            }
            return state
        case FIND_MESSAGE:
            return {...state, messages:  action.messages, id: action.id}
        default:
            return state
    }
}

export const sendMessageAction = (data) => ({type: SEND_MESSAGE, data: data})
export const findMessageAction = (data) => ({type: FIND_MESSAGE, messages: data.messages, id: data.id})