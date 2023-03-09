import "./App.css";
import { Routes, Route } from "react-router-dom"; // <== IMPORT
import Navbar from "./components/Navbar";     // <== IMPORT
import Home from "./pages/Home"; 
import Signup from "./pages/Signup"
import Login from "./pages/Login"
import Question1 from "./pages/Question1";
import Question2 from "./pages/Question2";
import Question3 from "./pages/Question3";
import Question4 from "./pages/Question4";
import Question5 from "./pages/Question5";
import Question6 from "./pages/Question6";
import Profile from "./pages/Profile";

function App() {
  return (
    <div className="App">
          <Navbar />
 
    <Routes>      
        <Route path="/" element={ <Home /> } />
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/question1" element={<Question1/>}/>
        <Route path="/question2" element={<Question2/>}/>
        <Route path="/question3" element={<Question3/>}/>
        <Route path="/question4" element={<Question4/>}/>
        <Route path="/question5" element={<Question5/>}/>
        <Route path="/question6" element={<Question6/>}/>
        <Route path="/profile" element={<Profile/>}/>
    </Routes>
    </div>
  );
}
export default App;

