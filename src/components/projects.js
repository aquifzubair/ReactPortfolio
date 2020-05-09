import React from 'react';
import image2 from '../images/img-02.jpg'
import image3 from '../images/img-03.jpg'
import image4 from '../images/img-04.jpg'

export default function Projects(){
    return (
        <div class="card">
          <div class="card-block">
            <h2>Projects</h2>
            <div class="row">
              <div class="col-md-4">
                <img style={{height:"188px"}} src={image2} class="img-responsive" alt="" />
                <h3 class="h5">Resume Classifier</h3>
                <p>May 2019</p>
              </div>
              <div class="col-md-4">
                <img style={{height:"188px"}} src={image3} class="img-responsive" alt="" />
                <h3 class="h5">Online Food ordering System</h3>
                <p>Novemeber 2018</p>
              </div>
              <div class="col-md-4">
                <img sstyle={{height:"188px"}} src={image4} class="img-responsive" alt="" />
                <h3 class="h5">Background Generator</h3>
                <p>Aug 2018</p>
              </div>
            </div>
          </div>
        </div>
    )
}