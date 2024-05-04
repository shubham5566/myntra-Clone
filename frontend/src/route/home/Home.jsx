import React from 'react'
import { HomeItem } from '../../componants'
import {useSelector} from 'react-redux'
function Home() {
    const items = useSelector(store => store.items);
  
  return (
    <div className="d-flex flex-wrap m-4 gap-4">
        {
          items.map((item)=>(
          <HomeItem key={item.id} item={item}/>))
        }
      </div>
  )
}

export default Home