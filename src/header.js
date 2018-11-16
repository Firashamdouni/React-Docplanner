import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './image/image1.PNG';
import './header.css';

const image1={
    height:'65%'
};
const Header = (props) =>{
      return <div className="row header ">  
      <div className="col-lg-6 col-md-6 col-sm-8 d-flex flex-row justify-content-center image"><img style={image1} src={logo} alt="header"/></div> 
             <ul className=" col-lg-6 col-md-6  col-sm-8 d-flex flex-row justify-content-center  ul">
           <li className="p-2 "> <a href="https://www.docplanner.com/about-us" className="is-current">About us</a></li> 
             <li className="p-2 "><a href="https://www.docplanner.com/career">Career</a></li> 
           <li className="p-2 "><a  href="https://www.docplanner.com/career">Departement</a></li>
            </ul>
            </div>
    }

  
export default Header;