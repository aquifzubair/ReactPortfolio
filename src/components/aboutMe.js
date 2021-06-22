import React from 'react';
import image from '../images/img-01.jpeg';
import pdf from './../resume/aquif_resume.pdf';

export default function AboutMe() {
  return (
    <div className="card" style={{ marginTop: '-20px' }} id="aboutMe" >
      <div className="card-block">
        <h2>
          <center>About me</center>
        </h2>
        <div className="row">
          <div className="col-md-4">
            <p>
              <img className="img-responsive" alt="" src={image} />
            </p>
          </div>
          <div className="col-md-8">
            <p align="justify">
              I am working as a Software Engineer in Lal10. I am responsible for 
              creating front-end component using Angular and developing API's using NodeJs.

            </p>
            <p align="justify">
              I am a Bachelor of Engineering graduate in computer science from
              Sant Longowal Institute of Engineering and Technology. I have done
              Diploma in Electronics Engineering from Aligarh Muslim University.
            </p>
            <p align="justify">
              {' '}
              I have completed a full stack web development course from
              Udemy.com
              <a
                href="https://www.udemy.com/certificate/UC-XWHS2FVE/"
                target="_blank" rel="noopener noreferrer" 
              >
                {' '}
                (link of certificate).
              </a>
              In which, I got to learn HTML, CSS3, JavaScript. I have recently
              done fifteen days internship on JavaScript and earned JavaScript
              Data Structure and Algorithm Certificate from Freecodecamp
              <a
                href="https://www.freecodecamp.org/certification/aquifzubair/javascript-algorithms-and-data-structures"
                target="_blank" rel="noopener noreferrer" 
              >
                (link of certificate).{' '}
              </a>
              I successfully completed three months MERN Stack developer from Mountblue Technology, 
              And currently working as a Software Engineer in LAL10. In this training i created many Projects
              three of them is listed below in project section such as Spotify clone, Project Issue tracker and
              Movie cards using open API.
            </p>
            <strong>
              <i>Checkout my resume below</i>
            </strong>
            <br />
            <br />
            <i
              className="fa fa-file-pdf-o"
              style={{ fontSize: '30px', color: 'red' }}
            ></i>
            <br />
            <a href={pdf} style={{ fontSize: '20px' }} target="_blank" rel="noopener noreferrer" >
              <b>Resume</b>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
