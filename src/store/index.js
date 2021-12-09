import {combineReducers, createStore} from "redux";
import {addDialogReducer} from "./reducers/addDialogReducer";
import {changeNameReducer} from "./reducers/changeNameReducer";
import {changePhotoReducer} from "./reducers/changePhotoReducer";
import {sendMessageReducer} from "./reducers/sendMessageReducer";
import {composeWithDevTools} from "redux-devtools-extension";

const rootReducer = combineReducers({
    addDialogReducer,
    //changeNameReducer,
    //changePhotoReducer,
    //sendMessageReducer
})

export const store = createStore(rootReducer, composeWithDevTools());