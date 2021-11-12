import './App.css';
import SideMenu from "./components/SideMenu/SideMenu";
import Messages from "./components/MainContent/Messages";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Settings from "./components/SideMenu/Settings/Settings";
import SearchPage from "./components/SideMenu/Search/SearchPage";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <div className="global">
                    <SideMenu/>
                    <div className='contentWrapper'>
                        <Routes>
                            <Route path='/messages/*' element={<Messages/>}/>
                            <Route path='/settings' element={<Settings/>}/>
                            <Route path='/search' element={<SearchPage/>}/>
                        </Routes>
                    </div>
                </div>
            </div>
        </BrowserRouter>

    );
}

export default App;
