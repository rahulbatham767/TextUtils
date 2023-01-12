import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
export const Navbar = (prop) => {

  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-${prop.mode} bg-${prop.mode}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/">{prop.title}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse text-center" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" to="/" >Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link w-30" to="/about">About</Link>
              </li>



            </ul>
            <div className="d-flex justify-content-center">
              <div className={`bg-${prop.mode === 'dark' ? 'light' : 'dark'} rounded mx-2`}
                data-bs-toggle="form-check-input" data-bs-target="#flexSwitchCheckChecked"
                style={{ height: "30px", width: "30px", backgroundColor: "black" }} onClick={prop.tooglemode}>
              </div>
            </div>
            <div className="form-check form-switch d-flex justify-content-center">
              <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" onClick={prop.tooglemode} />
              <label className={`form-check-label  text-${prop.mode === 'dark' ? 'light' : 'dark'}`} htmlFor="flexSwitchCheckChecked" >Enabled {prop.mode} Mode</label>
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
  title: 'Set title here',
  abouttext: 'Set abouttext here'
}
