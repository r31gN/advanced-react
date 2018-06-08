import React, { PureComponent } from 'react';

class About extends PureComponent {
  render = () => (
    <div
      style={{ height: '100vh' }}
      className="page-not-found u-fx u-fx-align-center u-fx-justify-center"
    >
      <p>
        This app was made with{' '}
        <span role="img" aria-label="Love">
          ❤️
        </span>
      </p>
    </div>
  );
}

export default About;
