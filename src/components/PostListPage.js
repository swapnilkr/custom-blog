import React, { useState, useEffect } from 'react';
import PostList from './PostList.js';
import CategoryDropdown from './CategoryDropdown.js';
import Shimmer from './Shimmer';
import BannerImage from './BannerImage.js';
import '../styles/PostListPage.css';
import '../styles/Shimmer.css';
import { fetchPosts } from '../helpers/api.js';

const PostListPage = ({ categories, navigateToPostDetail }) => {
    const [selectedCategory, setSelectedCategory] = useState('');
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetchPostsData();
    }, [selectedCategory]);

    const fetchPostsData = async () => {
        setLoading(true);
        try {
            const data = await fetchPosts({ category: selectedCategory });
            setPosts(data?.posts);
        } catch (error) {
            console.error('Error fetching posts:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <BannerImage />
            <div className="post-list-page">
                <p className='post-header'>Latest articles</p>
                <CategoryDropdown categories={categories} setSelectedCategory={setSelectedCategory} />
                {loading ? (
                    <Shimmer />
                ) : (
                    <PostList posts={posts} navigateToPostDetail={navigateToPostDetail} />
                )}
            </div>
        </>
    );
};

export default PostListPage;
