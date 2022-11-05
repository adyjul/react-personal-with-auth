import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import { showFormattedDate } from "../../utils/config/network";
import parser from 'html-react-parser';

const CatatanList = (props) =>{
    return(
        props.data.map(({id,title,body,createdAt}) => (
            <article key={id} className="note-item">
                <h3 className="note-item__title">   
                    <Link to={`/notes/${id}`}>
                        {title}
                    </Link>                                   
                </h3>
                <p className="note-item__createdAt">{showFormattedDate(createdAt)}</p>
                <p className="note-item__body">{parser(body)}</p>
            </article>   
        ))
    )
}

CatatanList.propTypes = {
    data : PropTypes.array
}

export default CatatanList;