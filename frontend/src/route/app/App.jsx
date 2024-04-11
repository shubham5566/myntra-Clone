import {  Footer, Header } from "../../componants"

import 'bootstrap/dist/css/bootstrap.min.css';
import {Outlet} from 'react-router-dom'

function App() {
 
  return (
    <>
      <Header/>
      <Outlet/>
      
      <Footer/>
    </>
  )
}

export default App
