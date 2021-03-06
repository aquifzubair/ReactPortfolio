import React from 'react';

export default function ContactMe() {
  return (
    <div className="card" id="contactMe">
      <div className="card-block" style={{ width: '80%' }}>
        <h2>Contact Me</h2>
        <div
          style={{
            display: 'flex',
            width: '150%',
            padding: '0px',
            marginLeft: '-4px'
          }}
        >
          <div style={{ width: '50%', paddingLeft: '5px' }}>
            <h3>Mail id</h3>
            <p>
              Primary Mail id :-{' '}
              <a
                href="mailto:<nowiki>aquifzubair98@gmail.com? subject = subject.txt"
                target="_blank" rel="noopener noreferrer" 
              >
                {' '}
                aquifzubair98@gmail.com{' '}
              </a>{' '}
              <br />
            </p>
            <p>
              Secondry Mail id :-{' '}
              <a
                href="mailto:<nowiki>aaquifzubair@gmail.com? subject = subject.txt"
                target="_blank" rel="noopener noreferrer" 
              >
                aaquifzubair@gmail.com{' '}
              </a>
            </p>
          </div>
          <div>
            <h3>Mobile Number</h3>
            <p>
              Primary :- <a href="9041899921"> </a> +91-9041899921{' '}
            </p>{' '}
            <br />
            <p>
              Secondry :- <a href="8264257694"> </a> +91-8264257694{' '}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
