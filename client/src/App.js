import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { HomeScreen } from './components/HomeScreen';
import { AddMovieScreen } from './components/AddMovieScreen';
import { EditMovieScreen } from './components/EditMovieScreen';

import { GlobalProvider } from './context/GlobalState';
import { Navbar } from './components/ui/Navbar';

export const App = () => {
	return (
		<div>
			<GlobalProvider>
				<Router>
					<div>
						<Navbar page='movie-page' />
						<Switch>
							<Route exact path='/' component={HomeScreen} />
							<Route path='/movie/new' component={AddMovieScreen} />
							<Route path='/movie/edit/:id' component={EditMovieScreen} />
						</Switch>
					</div>
				</Router>
			</GlobalProvider>
		</div>
	);
};
