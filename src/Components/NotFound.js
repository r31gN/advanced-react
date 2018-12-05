import React from 'react';

const NotFound = () => (
  <div
    style={{ height: '100vh' }}
    className="page-not-found u-fx u-fx-align-center u-fx-justify-center"
  >
    <p>Ups! 404 Not Found.</p>
  </div>
);

export default React.memo(NotFound);
