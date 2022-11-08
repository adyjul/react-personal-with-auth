import { Component } from "react";
import {Header,Loading} from './component/index';
import { Login,NotFound,Register,Dashboard,Tambah,DetailCard } from "./pages";
import {putAccessToken,getUserLogged,getAccessToken} from './utils/config/network'
import { Routes, Route } from 'react-router-dom';
import Arsip from "./pages/arsip/Arsip";
import GLOBAL_VALUE from "./ValueContext";

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            isAuthUser : null,              
            inLogin : getAccessToken(), 
            isProses : true           
        }
        this.isloginSuccess = this.isloginSuccess.bind(this);
        this.logout = this.logout.bind(this);
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

    logout(){
        this.setState({
            isAuthUser : null
        });
        putAccessToken('');
    }

    async componentDidMount(){       
        let access = getAccessToken();
        await this.getOnUserLogged(access);     
        this.setState({
            isProses : false
        })               
    }

    async isloginSuccess({access}){                        
        this.getOnUserLogged(access);
    }
    


    render(){    
        
        if(this.state.isProses){
            return <Loading/>
        }

        if( this.state.isAuthUser === null ){ 
            return(   
            <GLOBAL_VALUE.Consumer>                
            {({theme,toogleTheme}) => 
                (                
                <div className="app-container" data-theme={theme}>
                    <Header access={false} toogleTheme={toogleTheme} theme={theme} dataUser={this.state.isAuthUser}/>    
                    <main>
                    <Routes>                    
                        <Route path='/register' element={<Register/>}/>
                        <Route path="/*" element={<Login isloginSuccess={this.isloginSuccess}/>}/>
                    </Routes>
                    </main>
                </div>
                )
            }
            </GLOBAL_VALUE.Consumer>
            )
        }else{
            return(
            <GLOBAL_VALUE.Consumer>                
            {({theme,toogleTheme}) => 
                (    
                <div className="app-container" data-theme={theme}>
                    <Header access={true} toogleTheme={toogleTheme} theme={theme} logout={this.logout} dataUser={this.state.isAuthUser}/>                    
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
            </GLOBAL_VALUE.Consumer>
            )
        }
        
    }
}

export default App;