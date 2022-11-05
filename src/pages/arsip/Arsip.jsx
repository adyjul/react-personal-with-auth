import { Component } from "react";
import { Link } from "react-router-dom";
import {Catatan} from "../../component/index";
import {SearchInput} from '../../component/index'
import { getAccessToken, getArchivedNotes } from "../../utils/config/network";

class Arsip extends Component{
    constructor(props){
        super(props)
        this.state = {
            data : [],
            isLoading : false
        }
    }

    async componentDidMount(){                    
        this.setState({
            isLoading : true
        })
        let {data} = await getArchivedNotes();        
        this.setState(() => {
            return{                
                data,                
            }
        })        
        this.setState({
            isLoading : false
        })
    }    

    render(){        
        return(
            <main>
            <section className='homepage'></section>
            <h2>Catatan Arsip</h2>
            <SearchInput/>
            <Catatan data={this.state.data} isLoading={this.state.isLoading}/>
            <div className="homepage__action">                        
            </div>
        </main>
        )
    }
}

export default Arsip;