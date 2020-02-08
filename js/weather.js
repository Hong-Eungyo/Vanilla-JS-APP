const weather = document.querySelector(".js-weather");

const API_KEY = "ee5e31497a84a321946d3c4d02a66041";
const COORDS = "coords";

function getWeather(lat, lng) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
  )
    .then(function(response) {
      return response.json();
    })
    .then(function(json) {
      const temperature = json.main.temp;
      const placwe = json.name;
      weather.innerText = `${temperature} @ ${placwe}`;
    });
}
//fetch를 사용해서 데이터를 얻음, fetch() 안에는 가져올 데이터가 들어가면 됨
//then()은 데이터가 다 불려져오면 함수 호출

function saveCoords(coordsObj) {
  localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

//위치정보 얻기를 허락하면 동시에 저장
function handleGeoSucces(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const coordsObj = {
    latitude,
    longitude
  };
  saveCoords(coordsObj);
  getWeather(atitude, longitude);
}
//객체변수의 이름과 key의 이름이 같다면 객체변수: 키 이름 이 아니라 한 이름만 적을 수 있음

function handleGeoError() {
  console.log("cant access geo location");
}

//위치정보 얻기
function askForCoords() {
  navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
}

function loadCoords() {
  const loadedCoords = localStorage.getItem(COORDS);
  if (loadedCoords === null) {
    askForCoords();
  } else {
    const parseCoords = JSON.parse(loadedCoords);
    getWeather(parseCoords.latitude, parseCoords.longitude);
  }
}

function init() {
  loadCoords();
}

init();
