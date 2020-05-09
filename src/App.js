import React from 'react';
import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import AboutMe from './components/aboutMe';
import Projects from './components/projects';
import Internship from './components/internship'
import Education from './components/education';
import Language from './components/language';
import SocialNetwork from './components/socialNetwork';
import Background from './images/img-01.jpeg'
import ContactMe from './components/contactMe';

function App() {
  return (
    <div >
      <div class="background-color-layer" style={{backgroundImage: `url(${Background})`}}
></div>
      <main class="content-wrapper">
      <Header />
      <div class="container">
          <div class="row">
            <div class="col-xs-12">
              <AboutMe />
              <Projects />
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
