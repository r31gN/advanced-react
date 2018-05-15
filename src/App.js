import React, { Component } from 'react';
import Filters from './Filters';
import PuppyAddForm from './PuppyAddForm';
import PuppiesList from './PuppiesList';
import * as actions from './Puppy.actions';
import { connect } from 'react-redux';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      isInAddMode: false
    };
  }

  componentDidMount = () => this.props._getPuppies();

  _onChangeFilterHandler = e => {
    const newFilter = e.target.value;
    this.props._fitlerPuppies(newFilter);
  };

  _onClickAddHandler = () =>
    this.setState(prevState => ({
      ...prevState,
      isInAddMode: !prevState.isInAddMode
    }));

  _onClickSaveHandler = puppy => this.props._addPuppy(puppy);

  _onClickAdoptHandler = puppyId => {
    const { globalState } = this.props;
    const { puppies } = globalState;
    const puppy = puppies.find(puppy => puppy.id === puppyId);
    puppy.adopted = !puppy.adopted;
    this.props._adoptPuppy(puppyId, puppy);
  };

  _onClickDeleteHandler = puppyId => this.props._deletePuppy(puppyId);

  render() {
    const { globalState } = this.props;
    const { puppies } = globalState;
    const { filteredPuppies } = globalState;
    const { filter } = globalState;

    if (!puppies.length) {
      return null;
    }

    return (
      <div className="puppies-app u-pa-double">
        <header className="puppies-app__header u-fx u-fx-align-center u-fx-justify-center u-mb-double">
          <h2>Puppy Adoption FTW</h2>
        </header>
        <div className="u-fx u-fx-align-center u-fx-justify-center  u-mb-double">
          <Filters
            filter={filter}
            onChangeFilterHandler={this._onChangeFilterHandler}
          />
          <span className="u-mh-double">OR</span>
          <button
            className="puppy-add-btn u-pa-half"
            onClick={this._onClickAddHandler}
          >
            Toggle add puppy form
          </button>
        </div>
        {this.state.isInAddMode ? (
          <PuppyAddForm onClickSaveHandler={this._onClickSaveHandler} />
        ) : null}
        <PuppiesList
          onClickAdoptHandler={this._onClickAdoptHandler}
          onClickDeleteHandler={this._onClickDeleteHandler}
          puppies={filteredPuppies}
        />
      </div>
    );
  }
}

const mapStateToProps = state => state;

const mapDispatchToProps = (dispatch, props) => ({
  _getPuppies: () => dispatch(actions.getPuppies()),
  _addPuppy: puppy => dispatch(actions.addPuppy(puppy)),
  _deletePuppy: puppyId => dispatch(actions.deletePuppy(puppyId)),
  _adoptPuppy: (puppyId, puppy) => dispatch(actions.adoptPuppy(puppyId, puppy)),
  _fitlerPuppies: newFilter => dispatch(actions.filterPuppies(newFilter))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
