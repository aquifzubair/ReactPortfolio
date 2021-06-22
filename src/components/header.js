import React from 'react';



function Header(){
    return (
        <header className="white-text-container section-container">
            <div className="text-center">
                <h1>I am Aquif Zubair</h1>
                <p>Web Developer</p>
                <p>            
                    <a className="fa-icon fa-icon-2x" href="https://www.linkedin.com/in/aquif-zubair/" title="" target="_blank" rel="noopener noreferrer" >
                    <i className="fa fa-linkedin"></i>
                    </a>
                    <a className="fa-icon fa-icon-2x" href="https://github.com/aquifzubair" title="" target="_blank" rel="noopener noreferrer" >
                    <i className="fa fa-github"></i>
                    </a>
                    <a className="fa-icon fa-icon-2x" href="https://www.facebook.com/aaquif.zubair" title="" target="_blank" rel="noopener noreferrer" >
                    <i className="fa fa-facebook"></i>
                    </a>
                    <a className="fa-icon fa-icon-2x" href="https://twitter.com/aquifzubair" title="" target="_blank" rel="noopener noreferrer" >
                    <i className="fa fa-twitter"></i>
                    </a>
                </p>
            </div>
        </header>
    )
}

export default Header;