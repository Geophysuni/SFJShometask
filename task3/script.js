const trafficLightE1 = document.querySelector('#trafficLight1');
const trafficLightE2 = document.querySelector('#trafficLight2');
const trafficLightE3 = document.querySelector('#trafficLight3');
const allLight = document.querySelector('#three');


function makeGreen() {

    trafficLightE1.style.background = ('green');
    trafficLightE2.style.background = ('black');
    trafficLightE3.style.background = ('black');

    allLight.removeEventListener('click', makeGreen);
    allLight.addEventListener('click', makeYellow);
    
}

function makeYellow() {

    trafficLightE1.style.background = ('black');
    trafficLightE2.style.background = ('yellow');
    trafficLightE3.style.background = ('black');

    allLight.removeEventListener('click', makeYellow);
    allLight.addEventListener('click', makeRed);
}

function makeRed() {

    trafficLightE1.style.background = ('black');
    trafficLightE2.style.background = ('black');
    trafficLightE3.style.background = ('red');

    allLight.removeEventListener('click', makeRed);
    allLight.addEventListener('click', makeGreen);
}


allLight.addEventListener('click', makeYellow);
allLight.addEventListener('click', makeRed);
allLight.addEventListener('click', makeGreen);