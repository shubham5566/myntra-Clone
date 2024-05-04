import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { itemsActions } from "../store/itemSlice";
import { fetchStutusActions } from "../store/fetchingStatusSlice";



function FetchItem() {
  const fetchStatus = useSelector((store) => store.fetchStatus);
  const dispatch = useDispatch();
 
  useEffect(() => {
    if (fetchStatus.fetchDone) return;
    
    const controller = new AbortController();
    const signal = controller.signal;
    dispatch(fetchStutusActions.markFetchingStarted())
    fetch("http://localhost:5000/items", {signal})
    .then((res) => res.json())
    .then(({items})=>{
    dispatch(fetchStutusActions.markFechDone())
    dispatch(fetchStutusActions.markFechingFinished())
      dispatch(itemsActions.addInitialItems(items[0]))
console.log("items Fetched",items)
    })

    return () => {
      controller.abort();
    };
  }, [fetchStatus]);

  return (
    <>
      
    </>
  );
}

export default FetchItem;
