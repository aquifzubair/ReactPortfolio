import React from 'react';

export default function ContactMe() {
  return (
    <div class='card'>
      <div class='card-block' style={{ width: '80%' }}>
        <h2>Contact Me</h2>
        <div
          style={{
            display: 'flex',
            width: '150%',
            padding: '0px',
            marginLeft: '-4px',
          }}
        >
          <div style={{ width: '50%', paddingLeft: '5px' }}>
            <h3>Mail id</h3>
            <p4>
              Primary Mail id :-{' '}
              <a
                href='mailto:<nowiki>aquifzubair98@gmail.com? subject = subject.txt'
                target='_blank'
              >
                {' '}
                aquifzubair98@gmail.com{' '}
              </a>{' '}
              <br />
            </p4>
            <p4>
              Secondry Mail id :-{' '}
              <a
                href='mailto:<nowiki>aaquifzubair@gmail.com? subject = subject.txt'
                target='_blank'
              >
                aaquifzubair@gmail.com{' '}
              </a>
            </p4>
          </div>
          <div>
            <h3>Mobile Number</h3>
            <p4>
              Primary :- <a href='9041899921'> </a> +91-9041899921{' '}
            </p4>{' '}
            <br />
            <p4>
              Secondry :- <a href='8264257694'> </a> +91-8264257694{' '}
            </p4>
          </div>
        </div>
      </div>
      np
    </div>
  );
}
