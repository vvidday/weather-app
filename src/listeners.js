import { JSONParser } from './jsonparser';
import { weather } from './apiwrapper';
import { updateDisplay, toggleFormat } from './domhandler';

const input = document.getElementById("input-field");
const submitButton = document.getElementById("submit-button");
const toggleslider = document.getElementById("toggle");

// Submit Button Listener
function buttonListener(){
    if(input.checkValidity()){
        JSONParser.parseWeather(weather.getCurrentWeather(input.value)).then((data)=>{
            input.value = "";
            updateDisplay(data);
            // let element = document.createElement("div");
            // element.textContent = JSON.stringify(data);
            // document.body.appendChild(element);
            input.focus();
        }
        );
    }
}

// Enter key listener
function enterKeyListener(key){
    if(key.key === "Enter") buttonListener;
}


//Slider listener
function toggleListener(){
    toggleFormat(this.value);
}



const init = () =>{
    submitButton.addEventListener("click", buttonListener);
    input.addEventListener("keydown", (key)=>{
        enterKeyListener(key);
    });
    toggleslider.addEventListener("input", toggleListener);
}

export {init};