import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export const Navbar = ({ page }) => {
	return (
		<nav className='navbar navbar-horizontal navbar-expand-lg navbar-dark bg-primary'>
			<div className='container'>
				<Link className='navbar-brand' to='/'>
					CRUD App
				</Link>

				<button
					className='navbar-toggler'
					type='button'
					data-toggle='collapse'
					data-target='#navbar-default'
					aria-controls='navbar-default'
					aria-expanded='false'
					aria-label='Toggle navigation'
				>
					<span className='navbar-toggler-icon'></span>
				</button>
				<div className='collapse navbar-collapse' id='navbar-default'>
					<div className='navbar-collapse-header'>
						<div className='row'>
							<div className='col-6 collapse-close'>
								<button
									type='button'
									className='navbar-toggler'
									data-toggle='collapse'
									data-target='#navbar-default'
									aria-controls='navbar-default'
									aria-expanded='false'
									aria-label='Toggle navigation'
								>
									<span></span>
									<span></span>
								</button>
							</div>
						</div>
					</div>

					<ul className='navbar-nav ml-lg-auto'>
						<NavLink
							activeClassName={page === 'movie-page' ? '' : 'active'}
							className='nav-item nav-link'
							exact
							to='/'
						>
							Inicio
						</NavLink>
						<NavLink
							activeClassName={page === 'movie-page' ? 'active' : ''}
							className='nav-item nav-link'
							exact
							to='/movie/new'
						>
							Agregar Película
						</NavLink>
					</ul>
				</div>
			</div>
		</nav>
	);
};
