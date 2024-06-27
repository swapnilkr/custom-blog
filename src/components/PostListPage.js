import React, { useState, useEffect, useRef } from 'react';
import { fetchPosts, fetchCategories } from '../helpers/api.js';
import PostList from './PostList.js';
import CategoryDropdown from './CategoryDropdown.js';
import Shimmer from './Shimmer.js';
import BannerImage from './BannerImage.js';
import Paginator from './Paginator.js';
import '../styles/PostListPage.css';
import '../styles/Shimmer.css';


function PostListPage() {
    const [posts, setPosts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [loading, setLoading] = useState(false);
    const categoryDropdownRef = useRef(null);

    useEffect(() => {
        fetchCategoriesData();
        fetchPostsData();
    }, []);


    useEffect(() => {
        fetchPostsData();
        scrollToCategoryDropdown();
    }, [page, selectedCategory]);


    const fetchCategoriesData = async () => {
        const categoriesData = await fetchCategories();
        setCategories(categoriesData);
    };

    const fetchPostsData = async () => {
        setLoading(true);
        try {
            const data = await fetchPosts({ page, category: selectedCategory });
            setPosts(data?.posts);
            setTotalPages(Math.ceil(data?.totalPosts / 20));
        } catch (error) {
            console.error('Error fetching posts:', error);
        } finally {
            setLoading(false);
        }
    };

    const scrollToCategoryDropdown = () => {
        if (categoryDropdownRef.current) {
            categoryDropdownRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            <BannerImage view="list" />
            <div className="post-list-page">
                <p className='post-header'>Latest articles</p>
                <CategoryDropdown
                    categories={categories}
                    setPage={setPage}
                    setSelectedCategory={setSelectedCategory}
                    innerRef={categoryDropdownRef} />
                {loading ? (
                    <Shimmer view="list" />
                ) : (
                    <PostList posts={posts} />
                )}
            </div>
            <Paginator page={page} setPage={setPage} totalPages={totalPages} />
        </>
    );
};

export default PostListPage;
