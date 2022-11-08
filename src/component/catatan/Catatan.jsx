import CatatanList from "./CatatanList";
import PropTypes from 'prop-types';

const Catatan = ({data,isLoading}) =>{
        
    if(isLoading){
        return(
            <section className="notes-list">
                <p className="notes-list__empty-message">Loading......</p>
            </section>
        )
    }
    return(
        <section className="notes-list">
            {
                data != "" ?  <CatatanList data={data}/> : <p className="notes-list__empty-message">Tidak ada catatan</p>                    
            }                             
        </section>
    )
}

Catatan.propTypes ={
    data : PropTypes.array.isRequired,
    isLoading : PropTypes.bool.isRequired
}

export default Catatan;