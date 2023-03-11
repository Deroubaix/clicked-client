import "./App.css";
import { Routes, Route } from "react-router-dom"; // <== IMPORT
import Navbar from "./components/Navbar";     // <== IMPORT
import Home from "./pages/Home"; 
import Signup from "./pages/Signup"
import Login from "./pages/Login"
import Profile from "./pages/Profile";
import Private from "./components/Private";
import Questionnaire from "./pages/Questionnaire"
import AllClicks from "./pages/AllClicks";
import ClickDetails from "./pages/ClickDetails";

function App() {
  return (
    <div className="App">
          <Navbar />
 
    <Routes>   

        <Route path="/" element={ <Home /> } />
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>      
        <Route path="/clicks" element={<AllClicks/>} />
        <Route path="/clicks/:id" element={<ClickDetails/>} />
          
        <Route path="/profile" element={
        <Private>
        <Profile/>
        
        </Private>
        
        }/>
        <Route path="/profile/questionnaire" element={<Questionnaire/>}/> 
       
     
    </Routes>
    </div>
  );
}
export default App;

