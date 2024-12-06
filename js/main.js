const key = "1ce25dd4928c9b00c871f1cfd05a3f6c";
console.log(key);
const api_link = ` https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key} `;

const search = document.querySelector(".search");
const input = document.querySelector("input");
const weather = document.querySelector(".weather");
const error = document.querySelector(".error");

search.addEventListener("submit", (e) => {
  e.preventDefault();
  const api_link = ` https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=${key} `;

  getData(api_link);
});
const getData = async (link) => {
  const req = await fetch(link);
  const data = await req.json();
  writeData(data);
};
let   weather_img;



const writeData = ((data)=>{
  if (data?.cod == "404") {
    error.innerHTML=`
    
      <h1>bunday davlat mavjud emas</h1>
    
    `
    weather.innerHTML=""
    
  }else{
    if ((data.weather[0].main = "Clouds")) {
      weather_img = "./images/clouds.png";
    } else if ((data.weather[0].main = "Clear")) {
      weather_img = "./images/clear.png";
    } else if ((data.weather[0].main = "Drizzle")) {
      weather_img = "./images/drizzle.png";
    } else if ((data.weather[0].main = "Rain")) {
      weather_img = "./images/rain.png";
    } else if ((data.weather[0].main = "Mist")) {
      weather_img = "./images/mist.png";
    } else if ((data.weather[0].main = "Snow")) {
      weather_img = "./images/snow.png";
    }
  
  }
  
weather.innerHTML=`

    <img src="${weather_img}" class="weather-icon" alt="" />
    <h1 class="temp">${Math.round(data.main.temp - 273.15)}°C</h1>
    <h2 class="city">${data.name}</h2>
    <div class="details">
      <div class="col">
        <img src="./images/humidity.png" alt="" />
        <div>
          <p class="humidity">${data.main.humidity}</p>
          <p>humidity</p>
        </div>
      </div>
      <div class="col">
        <img src="./images/wind.png" alt="" />
        <div>
          <p class="wind">${Math.round(data.wind.speed)}km/h</p>
          <p>wind speed</p>
        </div>
      </div>
    </div>
  


`
})
