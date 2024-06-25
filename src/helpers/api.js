const SITE_ID = '107403796';
const BASE_URL = `https://public-api.wordpress.com/rest/v1.1/sites/${SITE_ID}`;

// api to fetch all categories
export const fetchCategories = async () => {
    try {
        const response = await fetch(`${BASE_URL}/categories`);
        if (!response.ok) {
            throw new Error('Failed to fetch categories');
        }
        const data = await response?.json();
        return data?.categories || { "found": 0, "categories": [] };
    } catch (error) {
        console.error('Error fetching categories:', error);
        return [];
    }
};

// api to fetch all post for that pagination
export const fetchPosts = async ({ page = 1, category = '', number = 20 }) => {
    try {
        let url = `${BASE_URL}/posts/?fields=slug,categories,post_thumbnail,title,date&number=${number}&page=${page}`;
        if (category) {
            url += `&category=${category}`;
        }
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Failed to fetch posts');
        }
        const data = await response?.json();
        return {
            posts: data?.posts,
            totalPosts: data?.found,
        };
    } catch (error) {
        console.error('Error fetching posts:', error);
        return { posts: [], totalPosts: 0 };
    }
};

// api to fetch single post details
export const fetchSinglePost = async (slug) => {
    try {
        const response = await fetch(`${BASE_URL}/posts/slug:${slug}?fields=featured_image,title,author,content,date`);
        if (!response.ok) {
            throw new Error('Failed to fetch post');
        }
        const data = await response?.json();
        return data || {};
    } catch (error) {
        console.error('Error fetching single post:', error);
        return {};
    }
};
