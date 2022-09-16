let cityChoice;

if ("geolocation" in navigator) {
  navigator.geolocation.watchPosition(
    (position) => {
      const url =
        "https://api.openweathermap.org/data/2.5/weather?lon=" +
        position.coords.longitude +
        "&lat=" +
        position.coords.latitude +
        "&appid=dc8c9152e8adaad0ec8bf635818c0d42&units=metric";

      let request = new XMLHttpRequest(); // create an object that will allow us to make queries
      request.open("GET", url); // collect data
      request.responseType = "json"; // expect JSON
      request.send(); 

      // As soon as a response is received, this function is executed
      request.onload = function () {
        if (request.readyState === XMLHttpRequest.DONE) {
          if (request.status === 200) {
            let respond = request.response;
            let temperature = respond.main.temp;
            let city = respond.name;
            document.querySelector("#temperature_label").textContent =
              temperature;
            document.querySelector("#city").textContent = city;
          }
        } else {
          alert("A problem has occurred, please come back later.");
        }
      };
    },
    error,
    options
  );
} else {
  cityChoice = "Berlin";
  receiveTemperature(cityChoice);
}

var options = {
  enableHighAccuracy: true,
};

let cityChange = document.querySelector("#change");
cityChange.addEventListener("click", () => {
  cityChoice = prompt("Which city would you like to see?");
  receiveTemperature(cityChoice);
});

function error() {
  cityChoice = "Berlin";
  receiveTemperature(cityChoice);
}

function receiveTemperature(city) {
  const url =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    city +
    "&appid=dc8c9152e8adaad0ec8bf635818c0d42&units=metric";

  let request = new XMLHttpRequest(); // create an object that will allow us to make queries
  request.open("GET", url); 
  request.responseType = "json"; 
  request.send(); 

  
  request.onload = function () {
    if (request.readyState === XMLHttpRequest.DONE) {
      if (request.status === 200) {
        let respond = request.response;
        let temperature = respond.main.temp;
        let city = respond.name;
        document.querySelector("#temperature_label").textContent = temperature;
        document.querySelector("#city").textContent = city;
      } else {
        alert("A problem has occurred, please come back later.");
      }
    }
  };
}
