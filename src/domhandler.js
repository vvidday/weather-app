const input = document.getElementById("input-field");
const submitButton = document.getElementById("submit-button");
const loadingdiv = document.getElementById("loading-div");
let celsius = true;

function toggleVisibility(element){
    if(element.classList.contains("invisible")) element.classList.remove("invisible");
    else element.classList.add("invisible");
}


function toggleLoading(){
    toggleVisibility(input);
    toggleVisibility(submitButton);
    toggleVisibility(loadingdiv);
}


const handleError = (code) => {
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
const displayimg= document.getElementById("display-image");
const displaytempdiv = document.getElementById("display-temp-div");
const displaypressure= document.getElementById("display-pressure");
const displayhumid = document.getElementById("display-humidity");
const displaydesc = document.getElementById("display-description");

function updateDisplay(object){
    if(displaycontainer.classList.contains("invisible")) toggleVisibility(displaycontainer);
    if(celsius) displaytempdiv.textContent = object["temperature-celsius"];
    else displaytempdiv.textContent = object["temperature-farenheit"];
    displaypressure.textContent = object.pressure;
    displayhumid.textContent = object.humidity;
    displaydesc.textContent = object.description;
}


export {toggleLoading, handleError, updateDisplay};