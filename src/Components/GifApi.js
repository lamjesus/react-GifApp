
import React from 'react'
import { useFetchGif } from '../hooks/useFetchGif'
import GifItem from './GifItem';

const GifApi = ({categoria}) => {    
    
    const {data,loading} = useFetchGif(categoria);

    
    return (
        <>
            <h3>{categoria}</h3>
            {loading && <p>Loading</p>}
            
            
            <div className='grid'>
                
                
                    {data.map(image =>{
                        return <GifItem key = {image.id} 
                            {...image}
                        />
                    })}
                    
                
                
            </div>
        </>
    )
}

export default GifApi
