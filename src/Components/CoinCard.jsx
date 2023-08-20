import React from 'react'
import { Link } from 'react-router-dom'

const CoinCard = ({img,name,price,price_change}) => {
  
  return (
    <Link> 
      <div className='coincard'>
        <img src={img} alt="" />
        <h3>{name}</h3> 
        <p>$ {price}</p>
      </div> 
    
    </Link>
  )
}

export default CoinCard