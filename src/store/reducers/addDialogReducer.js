let defaultState = {
        dialogsPage: [
            {dialogId: 1, name: 'Иван'},
            {dialogId: 2, name: 'Олег'},
            {dialogId: 3, name: 'Андрей'},
            {dialogId: 4, name: 'Дмитрий'},
        ]
}

const ADD_DIALOG = "ADD_DIALOG";

export const addDialogReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_DIALOG:
            return {...state, dialogsPage: [...state.dialogsPage, action.data]}
        default:
            return state;
    }
}

export const addDialogAction = (data) => ({type: ADD_DIALOG, data: data})