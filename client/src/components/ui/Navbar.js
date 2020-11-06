import React from "react";
import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-sm navbar-light bg-ligth'>
      <Link className='navbar-brand' to='/'>
        CRUD App
      </Link>

      <div className='navbar-collapse'>
        <div className='navbar-nav'>
          <NavLink
            activeClassName='active'
            className='nav-item nav-link'
            exact
            to='/movie/new'
          >
            Nuevo Registro
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
