import React from 'react'
import { HomeItem } from '../../componants'
import {useSelector} from 'react-redux'
function Home() {
    const items = useSelector(store => store.items);
  
  return (
    <div className="d-flex flex-wrap justify-content-center gap-4 mtop ">
        {
          items.map((item)=>(
          <HomeItem key={item.id} item={item}/>))
        }
      </div>
  )
}

export default Home