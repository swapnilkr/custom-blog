import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchSinglePost } from '../helpers/api';
import BannerImage from './BannerImage';
import { formatDate } from '../helpers/const';
import { Link } from 'react-router-dom';
import '../styles/PostDetail.css';
import Shimmer from './Shimmer';

const PostDetail = () => {
    const { slug } = useParams();
    const [post, setPost] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        const fetchPostDetail = async () => {
            const postData = await fetchSinglePost(slug);
            setPost(postData);
        };
        fetchPostDetail();
    }, [slug]);

    if (!post) {
        return <div><Shimmer view="detail" /></div>;
    }

    return (
        <>
            <BannerImage view="detail" imgSrc={post?.featured_image} altImg={post?.title} />
            <div className="post-detail">
                <h1 className='post-detail-header' dangerouslySetInnerHTML={{ __html: post?.title || '' }}></h1>

                <div className='post-user-profile'>
                    <Link to={`${post?.author?.profile_URL}`} external>

                        <img src={post?.author?.avatar_URL || ''} alt="user-img" />
                    </Link>
                    <div>
                        <Link to={`${post?.author?.profile_URL}`} external>
                            <div className='post-author'>
                                {post?.author?.name}
                            </div>
                        </Link>
                        <div className='post-published-date'>
                            {formatDate(post?.date)}
                        </div>

                    </div>
                </div>
                <div className='post-content' dangerouslySetInnerHTML={{ __html: post.content }} />
            </div>
        </>

    );
};

export default PostDetail;
