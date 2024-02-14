import './App.css';
import UpcomingMissions from './pages/UpcomingMissions';
import Launches from './pages/Launches';
import LaunchDetails from './pages/LaunchDetails';
import PageNotFound from './pages/PageNotFound';
import Home from './pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavSpaceX from './components/NavSpaceX';





function App() {
  console.log("hello");
// <UpcomingMissions/>
//<Launches/>
  return (  

    <BrowserRouter>
      <NavSpaceX/>
      <Routes>
      <Route path="/" element={<Home/>} exact/>
      <Route path="/upcoming-missions" element={ <UpcomingMissions/>} />
      <Route path="/launches" element={<Launches/>} />
      <Route path="/launch-details/:id" element={<LaunchDetails/>} />
      <Route  element={<PageNotFound/>} />
      </Routes>
      

    </BrowserRouter>

   
  );
}

export default App;
