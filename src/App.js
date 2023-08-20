 import {BrowserRouter as Router,Routes,Route} from"react-router-dom"

import Header from "./Components/Header";
import Home from "./Components/Home";
import Market from "./Components/Market";
import Footer from "./Components/Footer";
import AboutUs from "./Components/AboutUs";

import './App.css';

import "./Styles/header.scss"
import "./Styles/home.scss"
import "./Styles/CoinCard.scss"
import "./Styles/Footer.scss"
import "./Styles/AboutUs.scss"
import News from "./Components/News";


function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/aboutus" element={<AboutUs/>}/>
        <Route path="/#market" element={<Market/>}/>
        <Route path="/#news" element={<News/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
