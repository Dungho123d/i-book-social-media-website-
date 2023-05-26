import { BrowserRouter as Router, Route, Link, Routes, Switch , Navigate} from "react-router-dom";
import React from 'react';

import Profile from "./pages/profile/Profile";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Temp from "./components/temp/Temp"
// import { LoginContext } from "./pages/contexts/LoginContext.jsx";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";




function App() {



 const {user} = useContext(AuthContext);

  return ( 
    <>
      <Router>
        <Routes>
        
          <Route exact path='/' element={
            user ? <Home /> : <Navigate to={'/login'}/>
          }/> 
            
          
          <Route exact path='/signup' element={
          user?<Navigate to={'/'}/>:<Signup />
          }/>
          <Route exact path='/login' element={
          user?<Navigate to={'/'}/>:<Login />
          }/>
          <Route exact path='/profile/:username' element={<Profile />}/>
          <Route exact path='/temp/:username' element={<Temp user={user} />}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
