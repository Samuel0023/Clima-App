//https://developers.google.com/maps/documentation/geocoding/start

// AIzaSyDyJPPlnIMOLp20Ef1LlTong8rYdTnaTXM
// AIzaSyDzbQ_553v-n8QNs2aafN9QaZbByTyM7gQ
// AIzaSyA5mjCwx1TRLuBAjwQw84WE6h5ErSe7Uj8
// AIzaSyCroCERuudf2z02rCrVa6DTkeeneQuq8TA
// AIzaSyBkDYSVRVtQ6P2mf2Xrq0VBjps8GEcWsLU
// AIzaSyAu2rb0mobiznVJnJd6bVb5Bn2WsuXP2QI
// AIzaSyAZ7zantyAHnuNFtheMlJY1VvkRBEjvw9Y
// AIzaSyDSPDpkFznGgzzBSsYvTq_sj0T0QCHRgwM
// AIzaSyD4YFaT5DvwhhhqMpDP2pBInoG8BTzA9JY
// AIzaSyAbPC1F9pWeD70Ny8PHcjguPffSLhT-YF8

const argv = require('./config/yargs').argv;

const lugar = require('./lugar/lugar');

const clima = require('./clima/clima');



let getInfo = async(direccion) => {
    try {
        let infoLocation = await lugar.getLugarLatLng(direccion);

        let infoClima = await clima.getClima(infoLocation.lat, infoLocation.lng);


        return ` El clima en ${infoLocation.Address} es de ${infoClima.temp} grados `;
    } catch (e) {
        return `No se puede obtener el clima de ${direccion}`;
    }
}

getInfo(argv.direccion)
    .then(
        resp => console.log(resp)
    )
    .catch(
        err => console.log(err)
    )