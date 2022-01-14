import './output.css'
import Navbar from './UI_Components/Navbar';
import Home from './pages/Home'
import Contacts from './pages/Contacts';
import AboutUs from './pages/AboutUs';

function App() {
  return (
      <div className="App min-h-screen">
          <Navbar />
          {/* <Home/> */}
          {/* <Contacts city={"Москва"}/> */}
          {/* <AboutUs/> */}
    </div>
  );
}

export default App;
