import React from 'react';
import PostListPage from './PostListPage';
import PostDetail from './PostDetail';

const PostViewRendered = ({ currentView, selectedPost, categories, navigateToPostDetail }) => {
    return (
        <>
            {currentView === 'postList' && (
                <PostListPage
                    categories={categories}
                    navigateToPostDetail={navigateToPostDetail}
                />
            )}
            {currentView === 'postDetail' && (
                <PostDetail post={selectedPost} />
            )}
        </>
    );
};

export default PostViewRendered;
