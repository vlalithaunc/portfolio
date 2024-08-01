import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './utils/Themes';
import Navbar from './components/Navbar';
import Blog from './components/Blog/Blog';
import BlogPostPage from './components/Blog/BlogPostPage'; // New page for individual blog posts
import './App.css';
import HeroSection from './components/HeroSection';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Experience from './components/Experience';
import Education from './components/Education';
import ProjectDetails from './components/ProjectDetails';
import styled from 'styled-components';

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
  padding-top: 60px;  // Adjust based on your navbar height
`;

const Wrapper = styled.div`
  background: linear-gradient(38.73deg, rgba(204, 0, 187, 0.15) 0%, rgba(201, 32, 184, 0) 50%), linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%);
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%,30% 98%, 0 100%);
`;

function App() {
  const [lightMode, setLightMode] = React.useState(true);
  const [openModal, setOpenModal] = React.useState({ state: false, project: null });

  return (
    <ThemeProvider theme={lightMode ? lightTheme : darkTheme}>
      <Router>
        <Navbar />
        <Body>
          <Routes>
            <Route path="/blog/:id" element={<BlogPostPage />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/" element={
              <>
                <HeroSection />
                <Wrapper>
                  <Skills />
                  <Experience />
                </Wrapper>
                <Projects openModal={openModal} setOpenModal={setOpenModal} />
                <Wrapper>
                  <Education />
                  <Contact />
                </Wrapper>
                <Footer />
                {openModal.state && (
                  <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
                )}
              </>
            } />
          </Routes>
        </Body>
      </Router>
    </ThemeProvider>
  );
}

export default App;
