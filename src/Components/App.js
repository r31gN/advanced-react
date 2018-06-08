import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Filters from './Filters';
import PuppyAddForm from './PuppyAddForm';
import PuppiesList from './PuppiesList';
import '../Css/App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      isInAddMode: false
    };
  }

  _onToggleAddPuppyFormHandler = () =>
    this.setState(prevState => ({
      ...prevState,
      isInAddMode: !prevState.isInAddMode
    }));

  render() {
    return (
      <div className="puppies-app u-pa-double">
        <header className="puppies-app__header u-fx u-fx-align-center u-fx-justify-center u-mb-double">
          <h2>Puppy Adoption FTW</h2>
        </header>
        <div className="u-fx u-fx-align-center u-fx-justify-center u-mb-double">
          <Filters />
          <span className="u-mh-double">OR</span>
          <button
            className="puppy-add-btn u-pa-half"
            onClick={this._onToggleAddPuppyFormHandler}
          >
            Toggle add puppy form
          </button>
        </div>
        {this.state.isInAddMode ? <PuppyAddForm /> : null}
        <PuppiesList />
        <footer className="puppies-app__footer u-fx u-fx-align-center u-fx-justify-center u-mt-double">
          <Link to="/about">Read more about this app</Link>
        </footer>
      </div>
    );
  }
}

export default App;
