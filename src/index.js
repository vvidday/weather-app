import './style.css';
import { JSONParser } from './jsonparser';
import { weather } from './apiwrapper';
import { updateDisplay } from './domhandler';

const input = document.getElementById("input-field");
const submitButton = document.getElementById("submit-button");




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
submitButton.addEventListener("click", buttonListener);

// Enter key listener
input.addEventListener("keydown", (key)=>{
    if(key.key === "Enter") buttonListener;
})




