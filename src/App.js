import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { fetchCategories } from './helpers/api';
import PostView from './components/PostView'


function App() {
	const [currentView, setCurrentView] = useState('postList'); // on load postList is default view
	const [selectedPost, setSelectedPost] = useState(null);
	const [categories, setCategories] = useState([]);

	useEffect(() => {
		fetchCategoriesData();
	}, []);

	const fetchCategoriesData = async () => {
		const categoriesData = await fetchCategories();
		setCategories(categoriesData);
	};

	const navigateToPostDetail = (post) => {
		setSelectedPost(post);
		setCurrentView('postDetail');
	};

	const navigateToPostList = () => {
		setSelectedPost(null);
		setCurrentView('postList');
	};

	// skipping react-router-dom as 3rd party lib
	return (
		<>
			<Header />
			<PostView
				currentView={currentView}
				selectedPost={selectedPost}
				categories={categories}
				navigateToPostDetail={navigateToPostDetail}
			/>
			<Footer />
		</>

	);
}

export default App;
