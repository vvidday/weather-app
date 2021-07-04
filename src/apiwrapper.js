import { api_key } from './secret';
import { toggleLoading } from './domhandler';

const API_KEY = api_key();
//API Wrapper
const weather = (() => {
    async function getCurrentWeather(city){
        toggleLoading();
        
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`, {mode: 'cors'});
        if(response.ok){
            const data = await response.json();
            toggleLoading();
            return data;
        }
        else{
            toggleLoading();
            return response.status;
        }
    }
    return {getCurrentWeather};

})();

export {weather};