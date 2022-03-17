const clock = document.querySelector("#clock");

// interval => happen per periods
function getClock() {
    const date = new Date();
    const hours = date.getHours().toString().padStart(2,"0");
    const minutes = date.getMinutes().toString().padStart(2,"0");
    const seconds = date.getSeconds().toString().padStart(2,"0");
    // console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`); 
    // clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    clock.innerText = `${hours}:${minutes}:${seconds}`
}

// sayHello();
getClock();
setInterval(getClock, 1000);
