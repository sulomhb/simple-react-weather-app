import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import WeatherInformationCards from "./components/Cards/WeatherInformationCards";
import HourlyForecastRow from "./components/HourlyForecast/HourlyForecastRows";

function App() {
  return (
    <div className="App">
      <Header />
      <WeatherInformationCards />
      <HourlyForecastRow cityName={'Skien'} />
      <Footer />
    </div>
  );
}

export default App;
