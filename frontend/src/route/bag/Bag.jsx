import React from 'react'
import BagSummary from '../../componants/bag summary/BagSummary'
import BagItem from '../../componants/BagItem'

function Bag() {
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
  return (
    <div className=' d-flex flex-row justify-content-center gap-4 m-4'>
      <div>

    <BagItem item ={item}/> 
      </div>
    
      <div>

      <BagSummary/>
      </div>

    
    </div>
    
  )
}

export default Bag