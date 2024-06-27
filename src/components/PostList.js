import React from 'react';
import PostCard from './PostCard.js';
import '../styles/PostList.css'

const PostList = ({ posts }) => {
    return (
        <div className="post-list">
            {posts.length > 0 ?
                <>
                    {posts.map((post) => (
                        <PostCard key={post?.slug} post={post} />
                    ))}
                </>
                :
                <>
                    <div className='fallback'>
                        Oops !! You have watched all. Explore other category ...
                    </div>
                </>
            }

        </div>
    );
};

export default PostList;
