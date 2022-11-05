import { Component } from "react";
import {Header,Loading} from './component/index';
import { Login,NotFound,Register,Dashboard,Tambah,DetailCard } from "./pages";
import {putAccessToken,getUserLogged,getAccessToken, getActiveNotes} from './utils/config/network'
import { Routes, Route } from 'react-router-dom';
import Swal from 'sweetalert2';
import Arsip from "./pages/arsip/Arsip";

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            isAuthUser : null,              
            inLogin : getAccessToken(),            
        }
        this.isloginSuccess = this.isloginSuccess.bind(this);
    }

    async getOnUserLogged(access){
        putAccessToken(access);
        const {data} = await getUserLogged(access);        
        this.setState(() => {
            return{
                isAuthUser : data                
            }
        })        
    }

    async componentDidMount(){       
        let access = getAccessToken();
        let getUser =  await this.getOnUserLogged(access);        
        this.setState(() => {
            return{
                initializing: false,                
            }
        })        
    }

    async isloginSuccess({access}){                        
        this.getOnUserLogged(access);
    }
    


    render(){    
        // if (this.state.initializing) {
        //    return null;
        // }            
        if( this.state.isAuthUser === null ){ 
            return(                
            <div className="app-container" data-theme="light">
                <Header access={false} dataUser={this.state.isAuthUser}/>    
                <main>
                <Routes>                    
                    <Route path='/register' element={<Register/>}/>
                    <Route path="/*" element={<Login isloginSuccess={this.isloginSuccess}/>}/>
                </Routes>
                </main>
            </div>            
            )
        }else{
            return(
                <div className="app-container" data-theme="light">
                    <Header access={true} dataUser={this.state.isAuthUser}/>                    
                    <Routes>                    
                        <Route path='/*' element={<NotFound/>}/>           
                        <Route path='/' element={<Dashboard/>}/>           
                        <Route path='/archives' element={<Arsip/>}/>                    
                        <Route path="/notes/new" element={<Tambah/>}/>
                        <Route path="/notes/:id" element={<DetailCard/>} />                        
                    </Routes>                
                </div>  
            )
        }
        
    }
}

export default App;