import React,{useState} from 'react';
import { AddCategories } from './Components/AddCategories';
import GifApi from './Components/GifApi';
export const GifExpertApp = ()=>{
   
 //let categorias = ['One Puch Man','DMC','Gantz','Trinity Blood'];
  const [categorias, setCategorias] = useState(['GOT'])
    // const HandleSeries = ()=>{
    //     setCategorias('Samurai X'); estoy convirtiendo el estado de un arrey a un srting
    //     setCategorias([...categorias,'Yugi Oh']);
           // setCategorias(cats => [...cats,''])
    //  }
    return (
            <>
            
              <h2>GifExpertApp</h2> 
              <AddCategories setCategories = {setCategorias}/> 
              <hr></hr>
              
              <ul>
                {
                  categorias.map(cate =>{
                     return <GifApi categoria = {cate} key={cate}/>
                  })
                }
               
                
              </ul>
            </>
        )
    
}


