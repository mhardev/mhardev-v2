import "./App.css";
import styled from "styled-components";
import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { Theme } from "./utilities/Themes.js";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import ProjectDetails from "./components/ProjectDetails";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { BrowserRouter as Router } from "react-router-dom";

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  height: 100%;
  overflow-x: hidden;
`;


const Wrapper = styled.div`
  background: linear-gradient(
    38.73deg, 
    rgba(204, 0, 187, 0.15) 0%, 
    rgba(201, 32, 184, 0) 50%
    ), 
    linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, 
    rgba(0, 70, 209, 0.15) 100%
    );
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%,30% 98%, 0 100%);
`;

function App() {
  const [openModal, setOpenModal] = useState({ state: false, project: null });
  console.log(openModal)
  return (
    <ThemeProvider theme={Theme}>
      <Router>
        <Navbar/>
        <Body>
          <About/> 
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
          {openModal.state &&
            <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
          }
        </Body>
      </Router>
    </ThemeProvider>
  );
}

export default App;
