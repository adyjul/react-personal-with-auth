import { Component } from "react";
import {Header} from './component/index';
import { Login,NotFound,Register } from "./pages";
import { BrowserRouter, Routes, Route } from 'react-router-dom';


class App extends Component{
    render(){
        return(
            <BrowserRouter>
                <div className="app-container" data-theme="light">
                    <Header/>    
                    <main>
                    <Routes>
                        <Route path='/login' element={<Login/>} />
                        <Route path='/register' element={<Register/>}/>
                        <Route path="/*" element={<NotFound/>}/>
                    </Routes>
                    </main>
                </div>
            </BrowserRouter>
        )
    }
}

export default App;