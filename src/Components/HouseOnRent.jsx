import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import screenLoader from "../images/screenLoad.gif";
import rentHouseAction from "../store/Actions/rentHouseActions";
import HouseOnMess from "./HouseOnMess";
import "../StyleSheet/HouseListed1.css";
import { Link } from "react-router-dom";
import mess1 from "../images/mess1.jpeg"
import mess2 from "../images/mess2.png"
import mess3 from "../images/mess3.jpg"
import mess4 from "../images/mess4.jpg"
import mess5 from "../images/mess5.jpg"
import mess6 from "../images/mess6.jpeg"

const HouseOnRent = () => {
  
  return (
    <div class ="row my-3 h-100">
                <div class="col-sm-6 col-md-3 col-lg-4">
                    <div class="card gy-3" >
                        <img src={mess1} class="card-img-top" alt="..."/>
                        <div class="card-body">
                          <h5 class="card-title">Card title</h5>
                          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                          <Link to="/mess" class="btn btn-primary">More...</Link>
                        </div>
                      </div>
                      
                </div>
                <div class="col-sm-6 col-md-3 col-lg-4 ">
                    <div class="card gy-3" >
                        <img src={mess2} class="card-img-top" alt="..."/>
                        <div class="card-body">
                          <h5 class="card-title">Card title</h5>
                          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                          <Link to="/mess" class="btn btn-primary">More...</Link>
                        </div>
                      </div>
                      
                </div>
                <div class="col-sm-6 col-md-3 col-lg-4">
                    <div class="card gy-3">
                        <img src={mess3} class="card-img-top" alt="..."/>
                        <div class="card-body">
                          <h5 class="card-title">Card title</h5>
                          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                          <Link to="/mess" class="btn btn-primary">More...</Link>
                        </div>
                      </div>
                      
                </div>
                <div class="col-sm-6 col-md-3 col-lg-4">
                    <div class="card gy-3">
                        <img src={mess4} class="card-img-top" alt="..."/>
                        <div class="card-body">
                          <h5 class="card-title">Card title</h5>
                          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                          <Link to="/mess" class="btn btn-primary">More...</Link>
                        </div>
                      </div>
                      
                </div>
                <div class="col-sm-6 col-md-3 col-lg-4">
                    <div class="card gy-3 ">
                        <img src={mess5} class="card-img-top" alt="..."/>
                        <div class="card-body">
                          <h5 class="card-title">Card title</h5>
                          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                          <Link to="/mess" class="btn btn-primary">More...</Link>
                        </div>
                      </div>
                      
                </div>
                <div class="col-sm-6 col-md-3 col-lg-4">
                    <div class="card gy-3">
                        <img src={mess6} class="card-img-top" alt="..."/>
                        <div class="card-body">
                          <h5 class="card-title">Card title</h5>
                          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                          <Link to="/mess" class="btn btn-primary">More...</Link>
                        </div>
                      </div>
                      
                </div>
               
                </div>
            
        
  );
};

export default HouseOnRent;
