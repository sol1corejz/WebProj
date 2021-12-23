import './App.css';
import SideMenu from "./components/SideMenu/SideMenu";
import Messages from "./components/MainContent/Messages";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import SettingsPage from "./components/SideMenu/SettingsPage/SettingsPage";
import SearchPage from "./components/SideMenu/SearchPage/SearchPage";
import Auth from "./components/Auth/Auth";
import {useSelector} from "react-redux";


function App() {

    const authState = useSelector(state => state.authUserReducer.auth)

    const isAuth = (a) => {
        if(!a){
            return <Auth/>
        }
        else{
            return (
                <div className="global">
                    <SideMenu/>
                    <div className='contentWrapper'>
                        <Routes>
                            <Route path='/messages/*' element={<Messages/>}/>
                            <Route path='/main/settings' element={<SettingsPage/>}/>
                            <Route path='/main/search' element={<SearchPage/>}/>
                        </Routes>
                    </div>
                </div>
            )
        }
    }

    return (
        <BrowserRouter>
            <div className="App">
                {
                    isAuth(authState)
                }
            </div>
        </BrowserRouter>
    );
}

export default App;
