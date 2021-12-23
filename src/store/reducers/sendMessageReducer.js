const defaultState = {
        messages: [
            {date:1, contentType: 'incoming', messageText: 'Hello'},
            {date:2, contentType: 'incoming', messageText: 'gay'},
            {date:3, contentType: 'incoming', messageText: 'ahahah'},
            {date:4, contentType: 'outgoing', messageText: 'Hi'},
            {date:5, contentType: 'outgoing', messageText: 'Negro'},
            {date:6, contentType: 'incoming', messageText: 'Text4'},
            {date:7, contentType: 'incoming', messageText: 'Text4'},
            {date:8, contentType: 'outgoing', messageText: 'Text4Text4Text4Text4Text4Text4'},
            {date:9, contentType: 'incoming', messageText: 'Text4'},
            {date:10, contentType: 'incoming', messageText: 'Text4'},
        ]
}

const SEND_MESSAGE = 'SEND_MESSAGE'

export const sendMessageReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            return {...state, messages: [...state.messages, action.data]}
        default:
            return state
    }
}

export const sendMessageAction = (data) => ({type: SEND_MESSAGE, data: data})