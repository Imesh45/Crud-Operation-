import React from 'react'
import './Navbar.css'
const Navbar = () => {
  return (
    <div className='App'>
      <nav class="navbar navbar-expand-md navbar-dark fixed-top ">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Audit</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarCollapse">
      <ul class="navbar-nav me-auto mb-2 mb-md-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="/Ncr_create">NCR Create</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="/Auditor_number">Audit Number Create</a>
        </li>
       
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
