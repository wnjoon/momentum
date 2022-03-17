
const API_KEY="be52750936858ebf552b1c77474db550";


function onGeoSuccess(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const weather = document.querySelector("#weather span:first-child");
            const city = document.querySelector("#weather span:last-child");
            weather.innerText = data.weather[0].main;
            city.innerText = data.name;
    });
}

function onGeoFailed() {
    alert("Can't find location");
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoFailed); 


