import React from 'react';
import image from '../images/img-01.jpeg';
import pdf from './../resume/aquif_resume.pdf';

export default function AboutMe() {
  return (
    <div class="card">
      <div class="card-block">
        <h2>
          <center>About me</center>
        </h2>
        <div class="row">
          <div class="col-md-4">
            <p>
              <img class="img-responsive" alt="" src={image} />
            </p>
          </div>
          <div class="col-md-8">
            <p align="justify">
              I was working as a front-end Developer in a company named LIFTOFF
              LLC. Things were going smooth but I became the victim of layoff
              due to this pandemic.
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
                target="_blank"
              >
                {' '}
                (link of certificate).
              </a>
              In which, I got to learn HTML, CSS3, JavaScript. I have recently
              done fifteen days internship on JavaScript and earned JavaScript
              Data Structure and Algorithm Certificate from Freecodecamp
              <a
                href="https://www.freecodecamp.org/certification/aquifzubair/javascript-algorithms-and-data-structures"
                target="_blank"
              >
                (link of certificate).{' '}
              </a>
              As a final year degree project, I made a Resume Classifier web
              app. This web app is used to classify the resume according to your
              need from bundle of resumes. I have done forty days training on
              Python at Naresh I Technology, Hyedrabad. In this training i
              learned basic concept of Python and OOPS.
            </p>
            <strong>
              <i>Checkout my resume below</i>
            </strong>
            <br />
            <br />
            <i
              class="fa fa-file-pdf-o"
              style={{ fontSize: '30px', color: 'red' }}
            ></i>
            <br />
            <a href={pdf} style={{ fontSize: '20px' }} target="_blank">
              <b>Resume</b>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
