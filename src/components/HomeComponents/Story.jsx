import React from 'react';
import './Story.scss';

function Story(props) {
  return (
    <div>
      <div className="container__story">
        <div className="container__story-content">
          <h3>Helping Veterans Move Forward</h3>
          <p>
            Two 14 Coffee Company's beginnings are founded in the history of the
            2nd/14th Light Horse Regiment (Queensland Mounted Infantry). We are
            a proud Australian small business, serving local communities and
            giving back to support Australian military veterans and their
            families.
          </p>
          <div className="container__story-button">
            <button>Read our story</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Story;
