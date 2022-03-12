const axios = require('axios');

const getLugarLatLng = async(direccion) => {

    let encodeUrl = encodeURI(direccion);
    //encodeURI() es una funcion de javascript que convierte un string en un string url amigable
    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeUrl}&key=AIzaSyD4YFaT5DvwhhhqMpDP2pBInoG8BTzA9JY`)

    if (resp.data.status === 'ZERO_RESULTS') {
        throw new Error(`No hay resultados para la ciudad ${direccion}`)
    }


    let dir = resp.data.results[0].formatted_address;
    let location = resp.data.results[0].geometry.location;


    //console.log(resp.status);
    //200 es ok!!!

    return {
        Address: dir,
        lat: location.lat,
        lng: location.lng
    }
}


module.exports = {
    getLugarLatLng
}
