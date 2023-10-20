import React from 'react';
import { Box, Typography } from '@mui/material';
import './App.css';
import Header from './components/Header';
import {
	BrowserRouter as Router,
	Route,
	Link,
	BrowserRouter,
	Routes,
} from 'react-router-dom';
import Bio from './components/Bio';
import Contact from './components/Contact';
import Races from './components/Races';
import { Home } from '@mui/icons-material';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path='/'
					element={<Bio />}
				/>
				<Route
					path='/races'
					element={<Races />}
				/>
				<Route
					path='/contact'
					element={<Contact />}
				/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
