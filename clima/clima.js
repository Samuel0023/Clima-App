const axios = require('axios');


const getClima = async(lat, lng) => {

    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=4191791487fc092104984aba614b34b3`);


    if (resp.code === 400) {
        throw new Error(`No se pude Obtener los datos del clima de esta zona`);
    }

    return resp.data.main

}



module.exports = {
    getClima
}