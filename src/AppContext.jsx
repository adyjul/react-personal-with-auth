import { Component } from "react";
import App from "./App";
import GLOBAL_VALUE from "./ValueContext";

class AppContext extends Component{

    constructor(props){
        super(props)
        this.state = {
            theme: localStorage.getItem('theme') || 'light',
        }
    }


    render(){
        return(
            <GLOBAL_VALUE.Provider 
                value={{
                    theme : this.state.theme,
                    toogleTheme : () => {
                        this.setState((prevState) =>{    
                            let themeTemp = prevState.theme === 'light' ? 'dark' : 'light';
                            localStorage.setItem('theme', themeTemp);
                            return{
                                theme : themeTemp
                            }
                        })
                    }
                }}
            >
                <App/>
            </GLOBAL_VALUE.Provider>
        )
    }
}

export default AppContext