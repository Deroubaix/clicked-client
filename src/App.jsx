import "/styles/allPages.css";
import "./App.css";

import { Routes, Route } from "react-router-dom"; // <== IMPORT

import Navbar from "./components/Navbar"; // <== IMPORT
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import EditProfile from "./pages/EditProfile";
import Private from "./components/Private";
import Questionnaire from "./pages/Questionnaire";
import AllClicks from "./pages/AllClicks";
import ClickDetails from "./pages/ClickDetails";
import YourChats from "./pages/YourChats";
import Footer from "./components/Footer";
import ChatRoom from "./pages/ChatRoom";

import { useLocation } from "react-router-dom";

function App() {
  const location = useLocation();

  // Determine whether to show the Navbar based on the current path
  const showNavbar = location.pathname !== "/";

  return (
    <div className="App">
      {showNavbar && <Navbar />}
      <div className="page-content"> {/* wrapper div */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/clicks" element={<AllClicks />} />
          <Route path="/clicks/:id" element={<ClickDetails />} />
          <Route path="/yourchats" element={<YourChats />} />
          <Route path="/chat/chatroom/:id" element={<ChatRoom />} />
          <Route
            path="/profile"
            element={
              <Private>
                <Profile />
              </Private>
            }
          />
          <Route path="/profile/edit/:id" element={<EditProfile />} />
          <Route path="/profile/questionnaire" element={<Questionnaire />} />
        </Routes>
      </div>
      {(window.location.pathname === '/' || window.location.pathname === '/signup' || window.location.pathname === '/login') && <Footer />} 
      
    </div>
    
  );
          }  

export default App;
