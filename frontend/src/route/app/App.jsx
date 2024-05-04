import {  Footer, Header } from "../../componants"

import 'bootstrap/dist/css/bootstrap.min.css';
import {Outlet} from 'react-router-dom'
import FetchItem from "../../componants/FetchItem";
import { useSelector } from "react-redux";
import Loader from "../../componants/Loader";

function App() {
  const fetchStatus = useSelector((store) => store.fetchStatus);
  return (
    <>
      <Header/>
      <FetchItem/>
      {
        fetchStatus.currentlyFetching ? <Loader/>:<Outlet/>
      }
      
      
      <Footer/>
    </>
  )
}

export default App
