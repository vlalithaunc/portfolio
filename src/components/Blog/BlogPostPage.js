import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Markdown from 'markdown-to-jsx';
import search from './search.md'
import knowledge from './knowledge.md'


const blogPosts = [
  { id: '1', title: 'AI Overview', content: search },
  { id: '2', title: 'Knowledge Representation', content: knowledge },
];

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text};
  @media (max-width: 960px) {
    padding: 10px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  padding: 20px;
  background-color: ${({ theme }) => theme.card};
  border-radius: 12px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  margin-top: 20px;
  gap: 16px;
`;

const Title = styled.h1`
  font-size: 36px;
  font-weight: 700;
  text-align: center;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

const Content = styled.div`
  font-size: 18px;
  line-height: 1.6;
  color: ${({ theme }) => theme.text_secondary};
  max-width: 800px;
  text-align: left;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;


const BlogPostPage = () => {
  const { id } = useParams();
  const [content, setContent] = useState('');
  const post = blogPosts.find(post => post.id === id);

  useEffect(() => {
    if (post && post.content) {
      fetch(post.content)
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.text();
        })
        .then(data => setContent(data))
        .catch(error => {
          console.error('Error loading markdown file:', error);
          setContent('Error loading content.');
        });
    } else if (post) {
      setContent(post.content);
    }
  }, [post]);

  if (!post) {
    return (
      <Container>
        <Wrapper>
          <Title>Post not found</Title>
        </Wrapper>
      </Container>
    );
  }

  return (
    <Container>
      <Wrapper>
        <Title>{post.title}</Title>
        <Content>
          <Markdown>
            {content}
          </Markdown>
        </Content>
      </Wrapper>
    </Container>
  );
};

export default BlogPostPage;
