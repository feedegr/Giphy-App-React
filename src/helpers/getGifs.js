

const fetchGif = async ( url ) => {
    const res = await fetch ( url )
    const data = await res.json();
    return data;
}



const getGifs = async ( category ) => {

    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category ) }&limit=10&api_key=isAOCvuFMKXT7ZLbcaEFZ7OYwTEkhvhS`;
    const data = await fetchGif(url);
   // console.log(data.data);
    


    const gifs = data.data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })

    return gifs;
}
 
export default getGifs;