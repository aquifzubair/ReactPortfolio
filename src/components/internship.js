import React from 'react';

export default function Internship() {
  return (
    <div className="card" id="internship">
      <div className="card-block">
        <h2>Work Experience and Internships</h2>

        <div className="work-experience">
          <small className="date">Feb - June 2020</small>
          <h3 className="h5 date-title">
            Trainee Software Engeneer-{' '}
            <a
              href="https://www.liftoffllc.com/"
              title="Create professionnal website"
            >
              Liftoff LLC
            </a>
          </h3>

          <p>
            I worked here as a Junior Front-End Developer.Developed Login,
            SignUp, and Profile page using React hooks, react - redux. I learned
            here, how to do team work efficiently.
          </p>
        </div>

        <div className="work-experience">
          <small className="date">September 2019</small>
          <h3 className="h5 date-title">
            JavaScript Trainee -{' '}
            <a href="https://propel.school/" title="" target="_blank">
              Propel School
            </a>
          </h3>
          <p>
            Fifteen days intense training on JavaScript. In which I learned
            about JavaScript and its data structures and algorithms. I earned a
            certificate of JavaScript data structure and algorithm from
            Freecodecamp, and gained 500 points in HackerRank problem solving
            section.{' '}
          </p>
        </div>

        <div className="work-experience">
          <small className="date">June - July 2018</small>
          <h3 className="h5 date-title">
            Python Trainee -{' '}
            <a href="https://nareshit.in/" title="Create professionnal website">
              Naresh I Technology
            </a>
          </h3>

          <p>
            Forty days training on Python as summer internship in Naresh I
            Technology, Hyedrabad. In this training, I learned intermediate
            level concepts of Python and Object Oreinted Programming.{' '}
          </p>
        </div>
      </div>
    </div>
  );
}
