import './style.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faFireFlameSimple, faWind } from '@fortawesome/free-solid-svg-icons'
import search_icon from './Assets/search.png';
import cloud_icon from './Assets/cloud.png'
  
function home() {

  let apiKey = "02ac240d346bce90d0a15a873c8fe346";

  const search =  async () => {

    const element = document.getElementsByClassName("cityInput")
    


    if(element[0].value==="")
    {
       return 0;
     
    }
   let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${apiKey}`
     let response = await fetch(url);
     let data =  await response.json();
     const humidity = document.getElementsByClassName("humidity-percent");
     const wind = document.getElementsByClassName("wind-rate");
     const temprature = document.getElementsByClassName("weather-temp");
     const location = document.getElementsByClassName("weather-location");
     const pressure = document.getElementsByClassName("air-pressure");
     const weather_type = document.getElementsByClassName("weather-type");
     const city_country = document.getElementsByClassName("country");

     humidity[0].innerHTML = data.main.humidity + "%";
     wind[0].innerHTML = data.wind.speed + "km/h";
     temprature[0].innerHTML = data.main.temp + "°C";
     location[0].innerHTML = data.name;
     pressure[0].innerHTML = data.main.pressure + "pha";
     weather_type[0].innerHTML = data.weather[0].description ;
     city_country[0].innerHTML = data.sys.country;
     
    localStorage.setItem('City',JSON.stringify(data))
    console.log(data);  

  }



  return (
  <header className="body">
    <h1>WEATHER APP</h1>
     <div className="container">
    <div className="top-bar">
        <input type="text" className="cityInput" placeholder="search" />
        <div className="search-icon" onClick={() =>{search()}}>
            <img src={search_icon} alt="" />
        </div>
    </div>
    <div className="weather-image">
      <img src={cloud_icon} alt="" />
    </div>
    <div className="temp-type">
    <div className="weather-temp">24°C</div>
    <h4 className="weather-type"> Haze</h4>
    </div>
    <div className="name-country">
    <div className="weather-location">Kolkata</div>
    <p className="country">IN</p>
    </div>
    <div className="data-container">
      <div className="element">
       
        <FontAwesomeIcon icon={faFireFlameSimple} className="airpressure-icon" />
        <div className="data">
          <div className="humidity-percent">64%</div>
          <div className="text">Humidity</div>
        </div>
      </div>
      <div className="element">
        
        <FontAwesomeIcon icon={faWind} className="airpressure-icon" />
        <div className="data">
          <div className="wind-rate">20km/h</div>
          <div className="text">Wind Speed</div>
        </div>
      </div>
      <div className="element">
      <FontAwesomeIcon icon={faArrowDown} className="airpressure-icon" />
        <div className="data">
          <div className="air-pressure">1000pha</div>
          <div className="text">Air Pressure</div>
        </div>
      </div>
    </div>
   </div>
  </header>
  
  )
}

export default home