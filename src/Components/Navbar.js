import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (

    <main>
     <nav class="navbar fixed-top" aria-label="Light offcanvas navbar">
    <div class="container">
      <p>DPL</p>
      <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbarLight" aria-controls="offcanvasNavbarLight">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbarLight" aria-labelledby="offcanvasNavbarLightLabel">
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasNavbarLightLabel">DPL</h5>
          <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
          <ul class="navbar-nav justify-content-end flex-grow-1 pe-4">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/Auditor_number">Audit Number</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/Ncr_create">Add NCR</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/Ncr_detail/:id">NCR Details</a>
            </li>
            
          </ul>
          <form class="d-flex mt-3" role="search">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button class="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </div>
  </nav>

  </main>
  )
}

export default Navbar
