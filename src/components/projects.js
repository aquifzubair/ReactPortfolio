import React from 'react';
import image2 from '../images/img-02.jpg'
import image3 from '../images/img-03.jpg'
import image4 from '../images/img-04.jpg'

export default function Projects(){
    return (
        <div className="card" id="project">
          <div className="card-block">
            <h2>Projects</h2>
            <div className="row">
              <div className="col-md-4">
                <img style={{height:"188px"}} src={image2} className="img-responsive" alt="" />
                <h3 className="h5">Resume classNameifier</h3>
                <p>May 2019</p>
              </div>
              <div className="col-md-4">
                <img style={{height:"188px"}} src={image3} className="img-responsive" alt="" />
                <h3 className="h5">Online Food ordering System</h3>
                <p>Novemeber 2018</p>
              </div>
              <div className="col-md-4">
                <img sstyle={{height:"188px"}} src={image4} className="img-responsive" alt="" />
                <h3 className="h5">Background Generator</h3>
                <p>Aug 2018</p>
              </div>
            </div>
          </div>
        </div>
    )
}