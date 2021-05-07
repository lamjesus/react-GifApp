import {gifs} from '../Components/GifApi'

// Traer datos de la API
export const gifFetch = async (categoria)=> {
    const numeroGifs = 3;
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(categoria)}&limit=${numeroGifs}&api_key=DlEmChiB25eXluCFB8S2l97ZsY3FiDOK`
    const res = await fetch(url);
    const {data} = await res.json();
    const gifs = data.map(img => {
        return{
            id:img.id,
            title: img.title,
            url : img.images.downsized_large.url,
        }
    })
   return gifs;
   
}
