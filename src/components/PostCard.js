import React from 'react';
import '../styles/PostCard.css';

const PostCard = ({ post, onClick }) => {
    return (
        <div className="post-card" onClick={onClick}>
            <div className="post-thumbnail">
                <img src={post.post_thumbnail.URL} alt={post.title} />
            </div>
            <div className="post-content">
                <h2 className="post-title">{post.title}</h2>
                <p className="post-date">{formatDate(post.date)}</p>
                <p className="post-categories">
                    Categories: {Object.values(post.categories).map((category) => category.name).join(', ')}
                </p>
            </div>
        </div>
    );
};

const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
};

export default PostCard;
