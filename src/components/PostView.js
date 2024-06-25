import React from 'react';
import PostListPage from './PostListPage';
import PostDetail from './PostDetail';

const PostView = ({ currentView, selectedPost, categories, navigateToPostDetail }) => {
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

export default PostView;
