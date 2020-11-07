import React from "react";
import { Link, NavLink } from "react-router-dom";

export const Navbar = ({ page }) => {
  return (
    <nav className='navbar navbar-expand-sm navbar-dark bg-dark'>
      <Link className='navbar-brand' to='/'>
        CRUD
      </Link>

      <div className='navbar-collapse'>
        <div className='navbar-nav'>
          <NavLink
            activeClassName={page === "movie-page" ? "" : "active"}
            className='nav-item nav-link'
            exact
            to='/'
          >
            Inicio
          </NavLink>
          <NavLink
            activeClassName={page === "movie-page" ? "active" : ""}
            className='nav-item nav-link'
            exact
            to='/movie/new'
          >
            Agregar Película
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
