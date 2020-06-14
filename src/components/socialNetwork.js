import React from 'react';

export default function SocialNetwork(){
    return(
        <div className="card" id="socialNetwork">
          <div className="card-block">
            <h2>Social Network</h2>
            <div className="row">
              <div className="col-md-3">
                <p className="social-buttons"><a href="https://www.facebook.com/aaquif.zubair" title="" target="_blank"><span className="social-round-icon fa-icon"><i className="fa fa-facebook"></i></span>Aaquif Zubair</a></p>
              </div>
              <div className="col-md-3">
                <p className="social-buttons"><a href="https://twitter.com/aquifzubair" title="" target="_blank"><span className="social-round-icon fa-icon"><i className="fa fa-twitter"></i></span>@aquifzubair</a></p>
              </div>
              <div className="col-md-3">
                <p className="social-buttons"><a href="https://www.linkedin.com/in/aquif-zubair/" title="" target="_blank"><span className="social-round-icon fa-icon"><i className="fa fa-linkedin"></i></span>Aquif Zubair</a></p>
              </div>
              <div className="col-md-3">
                <p className="social-buttons"><a href="https://www.instagram.com/aquif_zubair/" title="" target="_blank"><span className="social-round-icon fa-icon"><i className="fa fa-instagram"></i></span>Aquif Zubair</a></p>
              </div>
            </div>
          </div>
        </div>
    )
}