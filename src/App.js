import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import WeatherInformationCards from "./components/Cards/WeatherInformationCards";

function App() {
  return (
    <div className="App">
      <Header />
      <WeatherInformationCards />
      <Footer />
    </div>
  );
}

export default App;
