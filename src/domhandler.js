import clear from './images/clear.png';
import clouds from './images/clouds.png';
import thunderstorm from './images/thunderstorm.png';
import drizzle from './images/drizzle.png';
import rain from './images/rain.png';
import snow from './images/snow.png';
import atmosphere from './images/atmosphere.png';



const input = document.getElementById("input-field");
const submitButton = document.getElementById("submit-button");
const form = document.querySelector("form");
const loadingdiv = document.getElementById("loading-div");
const togglecontainer = document.getElementById("toggle-container");
let celsius = true;
let currentcelsius = null;
let currentfarenheit = null;

function toggleVisibility(element){
    if(element.classList.contains("invisible")) element.classList.remove("invisible");
    else element.classList.add("invisible");
}


function toggleLoading(){
    toggleVisibility(form);
    toggleVisibility(loadingdiv);
    toggleVisibility(togglecontainer);
    
}


const handleError = (code) => {
    toggleLoading();
    switch(code){
        case 404:
            alert("Sorry, we couldn't find your city!");
            break;
        case 400:
            alert("Bad Request");
            break;
        default:
            alert("Unknown error, http code: " + code);
    }

}


const displaycontainer = document.getElementById("weather-display-container");
const displaycity = document.getElementById("display-city-name");
const displayimg= document.getElementById("display-image");
const displaytempdiv = document.getElementById("display-temp-div");
const displaypressure= document.getElementById("display-pressure");
const displayhumid = document.getElementById("display-humidity");
const displaydesc = document.getElementById("display-description");

function updateDisplay(object){
    if(displaycontainer.classList.contains("invisible")) toggleVisibility(displaycontainer);
    currentcelsius = object["temperature-celsius"];
    currentfarenheit = object["temperature-farenheit"];
    if(celsius) displaytempdiv.textContent = object["temperature-celsius"] + " °C";
    else displaytempdiv.textContent = object["temperature-farenheit"] + " °F";
    displaycity.textContent = object.name;
    displaypressure.textContent = "pressure: " + object.pressure + " hPa";
    displayhumid.textContent = "humidity: " + object.humidity + "%";
    displaydesc.textContent = object.description;

    switch(object.icondesc){
        case "Clear":
            displayimg.src = clear;
            break;
        case "Clouds":
            displayimg.src = clouds;
            break;
        case "Thunderstorm":
            displayimg.src = thunderstorm;
            break;  
        case "Drizzle":
            displayimg.src = drizzle;
            break;  
        case "Rain":
            displayimg.src = rain;
            break;  
        case "Snow":
            displayimg.src = snow;
            break;
        default:
            displayimg.src = atmosphere;
            break;
    }

}

function toggleFormat(value){
    if (value == 0 && celsius){
        celsius = false;
        if(currentfarenheit) displaytempdiv.textContent = currentfarenheit + " °F";
    }
    else if (value == 1 && !celsius){
        celsius = true;
        if(currentcelsius) displaytempdiv.textContent = currentcelsius + " °C";
    }
}



export {toggleLoading, handleError, updateDisplay, toggleFormat};