import './loading.css';

export const Loading = () => {
    return(
       <div className="loading overlay" >
            <div className="lds-ring">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>

    )
}