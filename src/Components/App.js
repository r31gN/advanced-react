import React, { useState, Suspense, lazy } from 'react';
import { Link } from 'react-router-dom';
import Loading from './Loading';
import '../Css/App.css';

const LazyFilters = lazy(() => import('./Filters'));
const LazyPuppyAddForm = lazy(() => import('./PuppyAddForm'));
const LazyPuppiesList = lazy(() => import('./PuppiesList'));

const App = () => {
  const [isInAddMode, setIsInAddMode] = useState(false);

  return (
    <div className="puppies-app u-pa-double">
      <header className="puppies-app__header u-fx u-fx-align-center u-fx-justify-center u-mb-double">
        <h2>Puppy Adoption FTW</h2>
      </header>
      <div className="u-fx u-fx-align-center u-fx-justify-center u-mb-double">
        <Suspense fallback={<Loading />}>
          <LazyFilters />
        </Suspense>
        <span className="u-mh-double">OR</span>
        <button
          className="puppy-add-btn u-pa-half"
          onClick={() => setIsInAddMode(!isInAddMode)}
        >
          Toggle add puppy form
        </button>
      </div>
      {isInAddMode ? (
        <Suspense fallback={<Loading />}>
          <LazyPuppyAddForm />
        </Suspense>
      ) : null}
      <Suspense fallback={<Loading />}>
        <LazyPuppiesList />
      </Suspense>
      <footer className="puppies-app__footer u-fx u-fx-align-center u-fx-justify-center u-mt-double">
        <Link to="/about">Read more about this app</Link>
      </footer>
    </div>
  );
};

export default React.memo(App);
