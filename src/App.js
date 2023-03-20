import {useState, createContext} from 'react';
import './App.css';
import AutoComplete from './components/AutoComplete'
import CurrentWeather from './components/CurrentWeather'

export const AppContext = createContext(null);

function App() {

  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [cityKey, setCityKey] = useState()

  return (
    <AppContext.Provider value={{
      city,
      setCity,
      country,
      setCountry,
      cityKey,
      setCityKey
    }}>
      <div className="App">
        <AutoComplete/>
        <CurrentWeather/>
      </div>
    </AppContext.Provider>
  );
}

export default App;
