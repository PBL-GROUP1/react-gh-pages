import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import { BrowserRouter , Routes , Route } from "react-router-dom";
// import SearchBar from "./Components/SearchBar.jsx";
import Banner from "./Components/Banner";
import Auto from "./Components/Auto";

// import Typewriter from "react-simple-typewriter";
// import "react-simple-type-writer/dist/index.css";
import MainContent from "./Components/MainContent";
import Footer from "./Components/Footer";
import HouseListing from "./Components/HouseListing";
import HouseOnSale from "./Components/HouseOnSale";
import HouseOnRent from "./Components/HouseOnRent";
import "./StyleSheet/App.css";
import HouseDescription from "./Components/HouseDescription";
// import FilterSearchResults from "./Components/FilterSearch";
import Mailer from "./Components/Contact-us";
import Home from "./Pages";
// import { Routes } from "react-router";
// import SearchResults from "./Components/SearchResults";
// import Login from "./Components/Login";
// import Register from "./Components/Register";
import InnerHostel from "./Components/InnerHostel";    
import HouseOnMess from "./Components/HouseOnMess";
import LoginForm from "./Components/login";
import SignupForm from "./Components/signup";
function App() {
  return (
    
    <div className="App">
      <NavBar/>
      <Routes>
        {/* <Route path="/house/search/:query">
          <NavBar />
          {/* <SearchResults /> */}
          
        {/* </Route>
        <Route path="/contact-us">
          <NavBar />
          <Mailer />
          <Footer />
        </Route>
        <Route path="/search/results-location/:location">
          <NavBar />  */}
          {/* <FilterSearchResults /> */}
        {/* </Route> */}
        {/* <Route path="/house/:location/:id">
          <NavBar />
          <HouseDescription />
        </Route> */}
        {/* <Route path="/properties/sale">
          <NavBar />
          <Home/>
          <Footer/>
        </Route> */}
        {/* <Route path="/properties/rent">
          <NavBar />
          <HouseOnRent />
         
          <Footer />
        </Route> */}
        {/* <Route path="/properties/sell">
          <NavBar />
          <HouseListing />
          <Footer />
        </Route> */}
        {/* <Route to="/">
          <NavBar />
          {/* <SearchBar /> */}        

        
          {/* <Banner />
          <MainContent />
          <Footer />
        </Route> */} 
        {/* <Route to="/login">
          <NavBar />
          {/* <SearchBar /> */}
          {/* <Banner />
          <MainContent /> */}
          {/* <Login/>
          <Footer />
        </Route>
        <Route to="/register">
          <NavBar /> */}
          {/* <SearchBar /> */}
          {/* <Banner />
          <MainContent /> */}
          {/* <Register/>
          <Footer />S
        </Route> */} */

        <Route path="/" element={<div><Banner/><MainContent/></div>} ></Route>
        {/* <Route path="/" element={<MainContent></MainContent>} ></Route> */}

        <Route path="/properties/sale" element={<HouseOnSale></HouseOnSale>} ></Route>
        <Route path="/properties/rent" element={<HouseOnRent></HouseOnRent>} ></Route>
        <Route path="/properties/sell" element={<HouseListing></HouseListing>} ></Route>
        <Route path="/contact-us" element={<Mailer></Mailer>} ></Route>
        <Route path = "/inner" element = {<InnerHostel></InnerHostel>}></Route>
        <Route path ="/mess" element={<HouseOnMess></HouseOnMess>}></Route>
        {/* <Route path="/login" element={<LoginForm></LoginForm>}></Route> */}
        <Route path="/signup" element={<SignupForm></SignupForm>}></Route>
      </Routes>
      <Footer/>
      </div>
      
  );
};

export default App;
