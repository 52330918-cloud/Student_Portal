import { Route, Routes } from "react-router-dom";
import About from "./components/About";



import Registration from "./components/Registration";
import Home from "./components/Home";
import Navbar from "./components/Navbar";


function App() {

 return(
  <div>
    <Navbar />
 <Routes>
      <Route path="/about" Component={About} />
      <Route path="/registration" Component={Registration} />
      <Route path="/" Component={Home} />

          
        

     </Routes> </div>
  
 )
}

export default App;
