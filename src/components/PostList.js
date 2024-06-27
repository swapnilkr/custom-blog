import React from 'react';
import PostCard from './PostCard.js';
import '../styles/PostList.css'

const PostList = ({ posts }) => {
    return (
        <div className="post-list">
            {posts.map((post) => (
                <PostCard key={post?.slug} post={post} />
            ))}
        </div>
    );
};

export default PostList;
