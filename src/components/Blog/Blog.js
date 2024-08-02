import React from 'react';
import BlogCard from '../Cards/BlogCard';
import styled from 'styled-components';
import Blog1Img from '../../images/blog-1.png';
import Blog2Img from '../../images/blog-2.png';
import Blog3Img from '../../images/blog-3.png';




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
        date: '2024-06-08',
        description: 'An overview of search algorithms and their role in solving complex problems efficiently.',
        image: Blog1Img,
        tags: ['Search Algorithms', 'DFS', 'BFS', 'Greedy Algorithm', 'A* Search', 'MiniMax']
    },
    {
        id: '2',
        title: 'Knowledge',
        date: '2024-06-22',
        description: 'Exploring how knowledge representation and inference drive intelligent decision-making in AI.',
        image: Blog2Img,
        tags: ['Propositional Logic', 'Entailment', 'Inference', 'Model Checking', 'Resolution', 'First Order Logic']
    },
    {
        id: '3',
        title: 'Uncertainity',
        date: '2024-06-29',
        description: '',
        image: Blog3Img,
        tags: [
            "Probability",
            "Conditional Probability",
            "Random Variables",
            "Independence",
            "Bayes’ Rule",
            "Joint Probability",
            "Bayesian Networks",
            "Sampling",
            "Markov Models",
            "Hidden Markov Models"
        ]
    },
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
