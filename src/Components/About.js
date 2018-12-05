import React from 'react';

const About = () => (
  <div
    style={{ height: '100vh' }}
    className="page-not-found u-fx u-fx-align-center u-fx-justify-center"
  >
    <p>
      This app was made with{' '}
      <span role="img" aria-label="Love">
        ❤️
      </span>{' '}
      <span>by Reign.</span>
    </p>
  </div>
);

export default React.memo(About);
