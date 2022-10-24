

export const getImagen = async() => {

    try {

        const apiKey = 'TP6T1iBnNOZmkkk5txHoalEjLCvOJ9qn';
        const resp   = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await resp.json(); 

        const { url } = data.images.original;

        return url;

    } catch (error) {
        // manejo del error
        console.error(error)

        return 'No se puede encontrar la img'
    }
    
    
    
}

 getImagen();



