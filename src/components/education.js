import React from 'react';

export default function Education(){
    return (
        <div className="card" id="education">
          <div className="card-block">
            <h2>Education</h2>
            <div className="row">
              <div className="col-md-4">
                <div className="education-experience">
                  <small className="date">2016-2019</small>
                  <h3 className="h5 date-title">BE in Computer Science</h3>
                  <p>Sant Longowal Institute of Engineering and Technology</p>
                </div>
                
              </div>
              <div className="col-md-4">
                <div className="education-experience">
                  <small className="date">2015-2012</small>
                  <h3 className="h5 date-title">Diploma in Electronics Engineering</h3>
                  <p>Aligarh Muslim University</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="education-experience">
                  <small className="date">2012-2011</small>
                  <h3 className="h5 date-title">High School</h3>
                  <p>G A Inter High School</p>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
}