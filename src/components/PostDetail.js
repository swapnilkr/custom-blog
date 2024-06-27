import React from 'react';
import '../styles/PostDetail.css';

const PostDetail = ({ post }) => {
    return (
        <div className="post-detail">
            <div className="post-header">
                <img src={post.featured_image.URL} alt={post.title} />
                <div className="post-header-content">
                    <h2 className="post-title">{post.title}</h2>
                    <p className="post-date">{formatDate(post.date)}</p>
                    <p className="post-author">Author: {post.author.name}</p>
                </div>
            </div>
            <div className="post-content" dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>
    );
};

const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
};

export default PostDetail;
