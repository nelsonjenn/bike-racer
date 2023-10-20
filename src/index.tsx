// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import ReactDOM from 'react-dom/client';

// import './index.css';
// import Bio from './components/Bio';
// import Races from './components/Races';
// import Contact from './components/Contact';

// const root = ReactDOM.createRoot(
// 	document.getElementById('root') as HTMLElement
// );
// export default function App() {
// 	return (
// 		<BrowserRouter>
// 			<Routes>
// 				<Route
// 					path='/'
// 					element={<Bio />}
// 				>
// 					<Route
// 						index
// 						element={<Bio />}
// 					/>
// 					<Route
// 						path='races'
// 						element={<Races />}
// 					/>
// 					<Route
// 						path='contact'
// 						element={<Contact />}
// 					/>
// 				</Route>
// 			</Routes>
// 			<App />
// 		</BrowserRouter>
// 	);
// }
import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
