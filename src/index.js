import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from "react-redux";
//import index from "./store";

//const store = index;

let state = {
    sideMenu: {
        dialogsPage: [
            {id: 1, name: 'Иван'},
            {id: 2, name: 'Олег'},
            {id: 3, name: 'Андрей'},
            {id: 4, name: 'Дмитрий'},
        ],
        messagesPage:[],
        settingsPage:[],
        searchPage:[]
    }
}

ReactDOM.render(
    <App state={state}/>,
  document.getElementById('root')
);

