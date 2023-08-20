import React, { useState, useEffect } from 'react';
import '../Styles/Market.scss';

const Market = () => {
  const [bitcoinData, setBitcoinData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [coinsPerPage] = useState(10); // Number of coins to display per page

  useEffect(() => {
    fetchBitcoinData();
  }, []);

  const fetchBitcoinData = async () => {
    try {
      const response = await fetch(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd'
      );
      const data = await response.json();
      //console.log(data);
      setBitcoinData(data);
    } catch (error) {
      console.error('Error fetching Bitcoin data:', error);
    }
  };
  const indexOfLastCoin = currentPage * coinsPerPage;
  const indexOfFirstCoin = indexOfLastCoin - coinsPerPage;
  const currentCoins = bitcoinData.slice(indexOfFirstCoin, indexOfLastCoin);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  
 
  
  return (
    <div id='market' style={{'backgroundClip':'#fcf7f7'}}>
    <div className="markets">
      <h1>Market Update</h1>
      <br />
      <table>
        <thead>
          <tr>
            <th>Coin</th>
            <th>Price</th>
            <th>24h Change</th>
            <th>Market Cap</th>
          </tr>
        </thead>
        <tbody>
          {currentCoins.map((coin, index) => (
            <tr key={index} style={{"borderBottom": "1px solid black"}} >
              <td style={{"display":"flex" ,"justifyContent":"flex-start"}}>
                <img className="coin-image" src={coin.image} alt={coin.name} />
                &nbsp;&nbsp;<p>{coin.name}</p>
              </td>
              <td>${coin.current_price.toLocaleString()}</td>

              <td style={{"color": coin.market_cap_change_percentage_24h < 0 ? "red" : "green" }} >{coin.market_cap_change_percentage_24h.toFixed(2)}%</td>
              <td>${coin.market_cap.toLocaleString()}</td>
               
            </tr>
            
          ))}
        </tbody>
      </table>

    </div>

    <div className="pagination"> 
        {Array.from({ length: Math.ceil(bitcoinData.length / coinsPerPage) }).map((_, index) => (
          <button
          key={index}
          className={currentPage === index + 1 ? 'active' : ''}
          onClick={() => paginate(index + 1)}
        >
          {index + 1}
        </button>
        ))}
       </div>
    </div>
  );
};

export default Market;
