import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useInput } from "../../component";
import { Loading } from "../../component";
import {addNote} from '../../utils/config/network';

const Tambah = () =>{

    const[judul,onJudul] = useInput('');
    const navigate = useNavigate();
    const[isi,onIsi] = useInput('');
    const[loading,isLoading] = useState(false);


    async function onInputSubmitData(e){    
        e.preventDefault();
        isLoading(true);
        let {data,error} = await addNote({
            title : judul,
            body : isi
        })
        isLoading(false);        
        return navigate('/');
    }

    return(
        <>
            { 
                loading ? <Loading/> : ''
            }
            <main>
                <form onSubmit={onInputSubmitData}>
                    <section className="add-new-page">
                    <div className="add-new-page__input">
                        <input className="add-new-page__input__title" placeholder="Catatan rahasia" value={judul} onChange={onJudul} type="text" />
                        <textarea className="add-new-page__input__body" placeholder="Sebenarnya saya adalah ...." value={isi} onChange={onIsi} />

                    </div>                 
                    <div className="add-new-page__action">
                        <button className="action" type="submit" title="Simpan"><svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0V0z" /><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" /></svg>
                        </button>
                    </div>                       
                    </section>
                </form>
            </main>        
        </>
    )
}

export default Tambah