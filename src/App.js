import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PostListPage from './components/PostListPage';
import PostDetail from './components/PostDetail';

function App() {
	return (
		<>
			<Router>
				<Header />
				<Routes>
					<Route path="/" exact element={<PostListPage />} />
					<Route path="/post/:slug"  element={<PostDetail />} />
					<Route path="*" element={<PostListPage/>}/>
				</Routes>
				<Footer />
			</Router>
		</>

	);
}

export default App;
