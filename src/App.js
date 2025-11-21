import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Courses from "./components/Courses";
import About from "./components/About";

function App() {
  return (
    <div>
     <Navbar/>
     <Routes>
       <Route path="/courses" Component={Courses} />
        <Route path="/about" Component={About} />

     </Routes>

    </div>
  );
}

export default App;
