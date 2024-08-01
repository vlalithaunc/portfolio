import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const blogPosts = [
  { id: '1', title: 'First Post', content: 'This is the content of the first post.' },
  { id: '2', title: 'Second Post', content: 'This is the content of the second post.' },
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
  const post = blogPosts.find(post => post.id === id);

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
        <Content>{post.content}</Content>
      </Wrapper>
    </Container>
  );
};

export default BlogPostPage;
