import React from 'react';
import { Link } from 'react-router-dom';

const About = () => (
  <div
    style={{ height: '100vh' }}
    className="page-not-found u-fx u-fx-column u-fx-align-center u-fx-justify-center"
  >
    <p className="u-mb-double">
      This app was made with{' '}
      <span role="img" aria-label="Love">
        ❤️
      </span>{' '}
      <span>by Reign.</span>
    </p>
    <Link to="/">Back to homepage</Link>
  </div>
);

export default React.memo(About);
