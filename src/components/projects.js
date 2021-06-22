import React from 'react';
import spotify from '../images/Spotify.png'
import movieCards from '../images/movieCards.png'
import projectIssueTracker from '../images/projectIssueTracker.png'

export default function Projects(){
    return (
        <div className="card" id="project">
          <div className="card-block">
            <h2>Projects</h2>
            <div className="row">
              <div className="col-md-4">
                <img style={{height:"188px"}} src={spotify} className="img-responsive" alt="" />
                <a href="https://karan-spotify.netlify.app/" target="_blank" rel="noopener noreferrer" >
                  <h3 className="h5">Spotify Clone</h3>
                </a>
                <p>Aug 2019</p>
              </div>
              <div className="col-md-4">
                <img style={{height:"188px"}} src={movieCards} className="img-responsive" alt=""/>
                <a href="https://aquif-movie-cards.netlify.app/" target="_blank" rel="noopener noreferrer" >
                  <h3 className="h5">Movie cards</h3>
                </a>
                <p>July 2020</p>
              </div>
              <div className="col-md-4">
                <img sstyle={{height:"188px"}} src={projectIssueTracker} className="img-responsive project-issue-tracker" alt=""/>
                <a href="https://aquif-project-issue-tracker.netlify.app/" target="_blank" rel="noopener noreferrer" >
                  <h3 className="h5">Project Issue Tracker</h3>
                </a>
                <p>june 2020</p>
              </div>
            </div>
          </div>
        </div>
    )
}