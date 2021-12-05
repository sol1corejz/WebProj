import './App.css';
import SideMenu from "./components/SideMenu/SideMenu";
import Messages from "./components/MainContent/Messages";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import SettingsPage from "./components/SideMenu/SettingsPage/SettingsPage";
import SearchPage from "./components/SideMenu/SearchPage/SearchPage";

function App(props) {

    return (
        <BrowserRouter>
            <div className="App">
                <div className="global">
                    <SideMenu sideMenu={props.state.sideMenu}/>
                    <div className='contentWrapper'>
                        <Routes>
                            <Route path='/messages/*' element={<Messages/>}/>
                            <Route path='/settings' element={<SettingsPage/>}/>
                            <Route path='/search' element={<SearchPage/>}/>
                        </Routes>
                    </div>
                </div>
            </div>
        </BrowserRouter>

    );
}

export default App;
