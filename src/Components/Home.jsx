import React, { useEffect, useState } from 'react'
import bitcoinimg from "../Assets/bitcoin.png"
import img2 from "../Assets/ethereum.webp"
import { server } from '../index'
import axios from 'axios'
import ErrorComponent from "./ErrorComponent"
import CoinCard from"./CoinCard"
import Market from './Market'
import AboutUs from './AboutUs'
import News from './News'









const Home = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const { data } = await axios.get(
          `${server}/coins/markets?vs_currency=USD&per_page=4`
        )
        console.log(data);
        setCoins(data);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };  fetchCoins();
  },[]);
  if (error) return <ErrorComponent message={"Error While Fetching Coins"} />;
  return (
    <>
    <div className="home">
      <div className="bitcoin-left">
        <img src={bitcoinimg} alt="" />
      </div>
      <div className="center-text"> 
        <h1>Crypto Made Simple <br/> <span>Get Started Today</span></h1> 

      </div>
      <div className="bitcoin-right">
        <img src={img2} alt="" />
      </div>
    </div>
        {coins.map((i,index) => (
          <CoinCard 
          //img, name,symbol,amount change in 24h
          key={index}
          img={i.image}
          name={i.name} 
          price={i.current_price}
        //  price_change={i.price_change_percentage_24h}
          />
        ))
      }
      <AboutUs/>
 <Market/>
 <News/>
</>
  )
}

export default Home