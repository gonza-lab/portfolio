import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useLoadingScreen } from './hooks/useLoadingScreen';
import data from './redux/data/actions';
import appActions from './redux/app/actions';
import { store } from './store/store';
import { ScreenLoading } from './screen/loading/Loading';
import { ScreenRoot } from './screen/Root';
import { ScreenApp } from './screen/App';
import { Header } from './component/header/Header';
import './style/general.scss';

const TIME_TRANSITION = 1;

const App = () => {
  const dispatch = useDispatch();
  const { showLoadingScreen, showEffect } = useLoadingScreen(TIME_TRANSITION);

  useEffect(() => {
    dispatch(data.startRead());
    dispatch(appActions.startRead());
  }, []);

  return (
    <>
      {showLoadingScreen && <ScreenLoading isExit={showEffect} />}
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={ScreenRoot} />
          <Route exact path="/app/:app" component={ScreenApp} />
          <Redirect to="/" />
        </Switch>
      </Router>
    </>
  );
};

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
