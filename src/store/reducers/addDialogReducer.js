let defaultState = {
        dialogsPage: [
            {id: 1, name: 'Иван'},
            {id: 2, name: 'Олег'},
            {id: 3, name: 'Андрей'},
            {id: 4, name: 'Дмитрий'},
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