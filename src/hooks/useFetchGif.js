import {useState,useEffect} from 'react'
import  { gifFetch } from '../helpers/getGifs';
export const useFetchGif = (categoria) => {
    
    const [state, setstate] = useState({
        data:[],
        loading: true
    })
    
    useEffect(() => {
        gifFetch(categoria).then(img =>setstate({
            data: img,
            loading:false
        }))
    },[categoria])
    return state;

}
