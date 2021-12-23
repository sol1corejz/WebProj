let defaultState = {
        dialogsPage: []
}

const ADD_DIALOG = "ADD_DIALOG";
const FIND_DIALOG = "FIND_DIALOG";

export const addDialogReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_DIALOG:

            let userId = action.data.id
            for (let i=0; i < state.dialogsPage.length; i++) {
                if (state.dialogsPage[i].id === userId){
                    return state
                }
            }
            return {...state, dialogsPage: [...state.dialogsPage, action.data]}
        case FIND_DIALOG:
            return {...state, dialogsPage: action.data}
        default:
            return state;
    }
}

export const addDialogAction = (data) => ({type: ADD_DIALOG, data: data})
export const findDialogsAction = (data) => ({type: FIND_DIALOG, data: data})