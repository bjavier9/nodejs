const axios = require('axios');
const getClima = async(lat, lng)=>{
    let resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=92571ce44718c8c9ca4a07ddd611c189`)
    return resp.data.main.temp;
}

module.exports = {
    getClima
}