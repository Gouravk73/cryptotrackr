import React, { useEffect, useState } from 'react'
import { AiFillFacebook, AiFillInstagram, AiFillTwitterSquare, AiFillYoutube } from 'react-icons/ai';
import { FiMapPin } from 'react-icons/fi';

import axios from "axios";

const url="https://newsapi.org/v2/everything?q=bitcoin&apiKey=81132434456849cea39990a91a68bf02"
 
const Footer = () => {
  const [news, setNews] = useState([]);

    useEffect(() => {
        axios.get(`${url}`).then((data)=>
        {//console.log(data.data.articles," sdfas0")
        const firstTwoArticles = data.data.articles.slice(0, 2);
   // console.log(firstTwoArticles);
        setNews(firstTwoArticles) 
       // console.log("Type")
       ;}
        )
           
        
    }, []);

  return (
    <footer className="footer">
      <div className="footerlogo">
        <h2>CryptoTrackr</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore veniam doloremque ullam sint quam aliquam quia ut, dolorum expedita numquam.</p>
      </div>
      <div className="social_media">
        <AiFillFacebook size="2rem" color="purple" />
        <AiFillInstagram size="2rem" color="purple" />
        <AiFillTwitterSquare size="2rem" color="purple" />
        <AiFillYoutube size="2rem" color="purple" />
      </div>
       
      
      <div className="location">
      <h2>Location</h2>
        <div className="location-icon">
          <FiMapPin size="1rem" />
          <h4>Washington</h4>
        </div> 
          
          <p>1559 Alabama Ave SE, DC 20032, Washington, USA</p>
     
      </div>
    </footer>
  );
};
const NewsCard = ({ind,title,url}) =>{
    return (
      <a style={{"textDecoration":"none"}}  href={url}>
        <p style={{"marginBottom":"1rem"}}>{ind+1}. {title}</p> 
      </a>
    )
}
export default Footer;
