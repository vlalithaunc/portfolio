import React from 'react';
import BlogCard from '../Cards/BlogCard';
import styled from 'styled-components';
import Blog1Img from '../../images/blog-1.png';

const BlogListContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
    padding: 20px;
`;

const blogPosts = [
    {
        id: '1',
        title: 'Search',
        date: '2024-07-31',
        description: 'This is a description for the first blog post. It gives an overview of the content.',
        image: Blog1Img,
        tags: ['Search Algorithms', 'DFS', 'BFS', 'Greedy Algorithm', 'A* Search', 'MiniMax']
    },
    {
        id: '2',
        title: 'Knowledge',
        date: '2024-08-01',
        description: 'This is a description for the second blog post. It provides more details about the topic.',
        image: 'https://via.placeholder.com/300',
        tags: ['Styled Components', 'CSS']
    },
    {
        id: '3',
        title: 'Knowledge',
        date: '2024-08-01',
        description: 'This is a description for the second blog post. It provides more details about the topic.',
        image: 'https://via.placeholder.com/300',
        tags: ['Styled Components', 'CSS']
    },
    {
        id: '4',
        title: 'Knowledge',
        date: '2024-08-01',
        description: 'This is a description for the second blog post. It provides more details about the topic.',
        image: 'https://via.placeholder.com/300',
        tags: ['Styled Components', 'CSS']
    },
    {
        id: '4',
        title: 'Knowledge',
        date: '2024-08-01',
        description: 'This is a description for the second blog post. It provides more details about the topic.',
        image: 'https://via.placeholder.com/300',
        tags: ['Styled Components', 'CSS']
    },
    {
        id: '4',
        title: 'Knowledge',
        date: '2024-08-01',
        description: 'This is a description for the second blog post. It provides more details about the topic.',
        image: 'https://via.placeholder.com/300',
        tags: ['Styled Components', 'CSS']
    }


];

const BlogList = () => {
    const handleBlogClick = (blog) => {
        // Handle blog click (e.g., navigate to the blog post page)
        console.log(blog);
    };

    return (
        <BlogListContainer>
            {blogPosts.map((blog) => (
                <BlogCard key={blog.id} blog={blog} onClick={handleBlogClick} />
            ))}
        </BlogListContainer>
    );
};

export default BlogList;
