import React from 'react';
import PostCard from './PostCard';
import '../styles/PostList.css'

const PostList = ({ posts, navigateToPostDetail }) => {
    const handlePostClick = (post) => {
        navigateToPostDetail(post);
    };

    return (
        <div className="post-list">
            {posts.map((post) => (
                <PostCard key={post.slug} post={post} onClick={() => handlePostClick(post)} />
            ))}
        </div>
    );
};

export default PostList;
