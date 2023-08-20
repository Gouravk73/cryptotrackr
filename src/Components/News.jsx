import React, { useEffect, useState } from 'react'
import axios from "axios"; 
import "../Styles/News.scss"

const url="https://newsapi.org/v2/everything?q=bitcoin&pageSize=30&sortBy=publishedAt&apiKey=81132434456849cea39990a91a68bf02"
const api="ec754296cf0079a77a28a049f4b6d6205b8663d2e2ce6869e578bbba5724c6ad"

const News = () => {
    const [news, setNews] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [coinsPerPage] = useState(5);
    useEffect(() => {
      const fetchNews = async () =>{
        const {data}  = await axios.get(`${url}`) ;
        console.log(data.articles)
        setNews(data.articles)   
      }
      fetchNews();
           
        
    }, []);
    const indexOfLastCoin = currentPage * coinsPerPage;
    const indexOfFirstCoin = indexOfLastCoin - coinsPerPage;
    const currentCoins = news.slice(indexOfFirstCoin, indexOfLastCoin);
    //console.log(news);
    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    return (
        <div  id='news'>
          <h1 style={{textAlign:"center",padding:"1rem 0 0 0"}}>Latest News </h1>
            {currentCoins.map((i,index) => (
                <NewsCard
                    
                    key={index}
                    id={i.source.id}
                    title={i.title}
                    url={i.url}
                    author={i.author}
                    date={i.publishedAt.split("T")[0]}
                    img={i.urlToImage}
                   
                />
                
            )
            )}
            <div className="pagination"> 
        {Array.from({ length: Math.ceil(news.length / coinsPerPage) }).map((_, index) => (
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



const NewsCard = ({id,title,url,img,author,date}) => {
  return (
    <div  className='grid-container'>
 
       
        <img src={img} alt="img" />
        <div> 
          <p>&#160; {date}</p >
          <h3>{title}</h3>
          <a href={url}target='blank' ><button>Read More</button></a>
          </div>
           </div>
  )
}
export default News;

 