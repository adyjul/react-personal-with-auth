import { DetailPage } from "../../component";
import { useNavigate, useParams } from "react-router-dom";
import { Component } from "react";
import {getNote,archiveNote,unarchiveNote,deleteNote} from '../../utils/config/network';
import PropTypes from 'prop-types';

const DetailCard = () => {
    const {id} = useParams();    
    const navigate = useNavigate();
    return <DetailComponent id={id} navigate={navigate} />
}

class DetailComponent extends Component{
    constructor(props){
        super(props);
        this.state = {
            data : {},
            isLoading : false
        }
        this.changeNote = this.changeNote.bind(this);
        this.deleteNote = this.deleteNote.bind(this);
    }
    
    async componentDidMount(){
        this.setState({
            isLoading : true
        })
        const {data} = await getNote(this.props.id);                
        this.setState({
            data,
            isLoading : false
        })
    }

    changeNote(id,status){     
        !status ?  archiveNote(id) : unarchiveNote(id);
        return this.props.navigate('/');
    }

    deleteNote(id){
        deleteNote(id);
        return this.props.navigate('/');
    }

    render(){         
        return(
            <main>
                <section className="detail-page">
                    <DetailPage data={this.state.data} changeNote={this.changeNote} isLoading={this.state.isLoading}  deleteNote={this.deleteNote}  />
                </section>
            </main>
        )
    }
}


export default DetailCard;