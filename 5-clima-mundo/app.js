
const lugar= require('./lugar/lugar')
const clima = require('./clima/clima')
const argv = require('yargs').options({
    direccion:{
        alias:'d',
        desc: 'direccion de la ciudad obtener el clima',
        demand:true
    }
}).argv
 let getInfo = async()=>{
    try{
        let coors = await lugar.getLugarLatLng(argv.direccion);
        let temp = await clima.getClima( coors.lat, coors.lng)
        return  `El clima es ${coors.direccion} es de ${temp} C°`
    }catch(e){
        return `no se pudo determinar el clima en ${argv.direccion}`
    }
 }
getInfo(argv.direccion)
 .then(mensaje =>console.log(mensaje))
 .catch(e => console.log(e))




// lugar.getLugarLatLng(argv.direccion).then(resp =>{
//     console.log(resp)
// }).catch(e => console.log(e))
// let encodedUrl = encodeURI(argv.direccion)
// console.log(encodedUrl)
// axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedUrl}&key=AIzaSyDzbQ_553v-n8QNs2aafN9QaZbByTyM7gQ `)
//             .then(resp => {
//                 let location = resp.data.results[0];
//                 let coors = location.geometry.location
                
//                 console.log('Direccion',location.formatted_address);
//                 console.log('lat', coors.lat)
//                 console.log('lng', coors.lng)



//                 // console.log(resp.data);
//                 // console.log(resp.status);
//             })
//             .catch(e=> console.log('ERROR', e))