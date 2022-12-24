import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
export const Navbar = (prop) => {
  const tooglemode=()=>{
      
  };
  return (

    

  <>
  <nav className={`navbar navbar-expand-lg navbar-${prop.mode} bg-${prop.mode}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="/">{prop.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active"  to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">{prop.abouttext}</Link>
        </li>
        
       
      
      </ul>
    <div className="d-flex">
      <div className="bg-primary rounded mx-2 " style={{height:"30px",width:"30px"}} onClick={()=>{prop.tooglemode}}>

      </div>
    </div>
      <div className="form-check form-switch">
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" onClick={prop.tooglemode}/>
  <label className={`form-check-label  text-${prop.mode==='dark'?'light':'dark'}`} htmlFor="flexSwitchCheckChecked">Enabled {prop.mode} Mode</label>
</div>
    </div>
   
  </div>
  
</nav>


  </>
  )
 
}
Navbar.propTypes = {
    title: PropTypes.string,
    abouttext: PropTypes.string
}

Navbar.defaultProps = {
    title:'Set title here',
    abouttext: 'Set abouttext here'
}
