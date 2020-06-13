import React from 'react';
import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import AboutMe from './components/aboutMe';
import Projects from './components/projects';
import Internship from './components/internship';
import Education from './components/education';
import Language from './components/language';
import SocialNetwork from './components/socialNetwork';
import ContactMe from './components/contactMe';
import Skill from './components/skills';
import Navigation from './components/Navigation';


function App() {
  return (
    <div>
      
      <header>
      <Navigation />
      </header>
      <main class="content-wrapper" style={{marginTop:'20px'}}>
        <Header />
        <div class="container">
          <div class="row">
            <div class="col-xs-12">
              <AboutMe />
              <Projects />
              <Skill />
              <Internship />
              <Education />
              <Language />
              <SocialNetwork />
              <ContactMe />
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </div>
  );
}

export default App;
