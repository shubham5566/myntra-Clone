import React from 'react'
import { HomeItem } from '../../componants'
const item =  {
    "id": "006",
    "image": "images/6.jpg",
    "company": "Nike",
    "item_name": "Men ReactX Running Shoes",
    "original_price": 14995,
    "current_price": 14995,
    "discount_percentage": 0,
    "return_period": 14,
    "delivery_date": "10 Oct 2023",
    "rating": { "stars": 0, "count": 0 }
  }
function Home() {
  return (
    <div className="bag-items-container">
        <HomeItem item={item}/>
      </div>
  )
}

export default Home