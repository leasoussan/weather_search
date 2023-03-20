import {useContext, useEffect, useState} from 'react';
import {AppContext} from '../App';

const BASE_URL = process.env.REACT_APP_BASE_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

const CurrentWeather = (props) => {
  const [currentWeather, setCurrentWeather] = useState([]);
  const {city,cityKey,country} = useContext(AppContext);

  useEffect(()=>{
    if(cityKey){
      getCurrentWeather(cityKey)
    }
  },[cityKey])

  const getCurrentWeather = (key) => {
    fetch(`${BASE_URL}/currentconditions/v1/${key}?apikey=${API_KEY}`)
    .then(res=>res.json())
    .then(data=>{
        setCurrentWeather(data)
    })
    .catch(err=>{
      console.log(err);
    })
  }

  if(currentWeather.length === 0) return null;

  return(
    <div>
      <h4>{city ? 'Current Weather' : null}</h4>
      <p>{city}<br/> {country}</p>
      <p>{currentWeather[0].Temperature.Metric.Value}</p>
      <p>{currentWeather[0].WeatherText}</p>
      <p>
        <img src={`https://developer.accuweather.com/sites/default/files/${currentWeather[0].WeatherIcon<10?'0'+currentWeather[0].WeatherIcon:currentWeather[0].WeatherIcon}-s.png`} />
      </p>
    </div>
  )
}
export default CurrentWeather
