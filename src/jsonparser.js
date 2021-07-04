import { handleError } from "./domhandler";

//Process JSON from API call
// We want: -Temperature in celsius and farenheit main>temp (kelvin)
// -humidity: main>humidity (percentage)
// -pressure: main>pressure (hPa)
// descriptio: weather > descritpion 
//icondesc
const JSONParser = (()=>{
    async function parseWeather(weather){
        const object = await weather;
        try{
            return {
                "temperature-celsius": Math.round((object.main.temp - 273.15)*100)/100,
                "temperature-farenheit": Math.round(100*((object.main.temp - 273.15)*(9/5) + 32))/100,
                "pressure": object.main.pressure,
                "humidity": object.main.humidity,
                "description": object.weather[0].description,
                "icondesc": object.weather[0].main,
                "name": object.name,
            }
        } catch (error){
            handleError(object);
        }
    }

    return {
        parseWeather,
    };

})();

export {JSONParser};