import React, { PureComponent } from 'react';

class NotFound extends PureComponent {
  render = () => (
    <div
      style={{ height: '100vh' }}
      className="page-not-found u-fx u-fx-align-center u-fx-justify-center"
    >
      <p>Ups! 404 Not Found.</p>
    </div>
  );
}

export default NotFound;
