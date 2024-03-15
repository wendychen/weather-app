import './App.css';
import Weather from './components/weather';
import CityList from './components/citylist';
import Footer from './components/footer';

function App() {
  return (
    <div>
      <h1>Weather App</h1>
      <CityList />
      <div className="weatherApp">
        <Weather />
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
