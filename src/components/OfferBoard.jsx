import React, { useEffect } from 'react'
import OfferCard from './OfferCard'
import { useState } from 'react';
import { fetchPost } from '../API';
import MessageForm from './MessageForm';

export default function OfferBoard() {
  const [offers,setOffers] = useState([]);
  
  useEffect(()=>{
    async function getOffers(){
      const result = await fetchPost();
      console.log("Posts",result.data.posts)
      setOffers(result.data.posts);
    }
    getOffers();
  },[])
  return (
    <div className="offerboard">OfferBoard
    {
      offers.map((offer)=>{
        return(<OfferCard key={offer._id} seller={offer.author}
        title={offer.title} description={offer.description} location={offer.location} price={offer.price}/>)
      })
    }
    
    </div>
  )
}
