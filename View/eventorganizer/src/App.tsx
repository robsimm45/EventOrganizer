import React from 'react';
import logo from './logo.svg';
import './App.css';
import { store } from './store';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { profileChooser } from './components/profilechooser/profilechooser.component';
import { eventFinder } from './components/eventfinder/eventfinder.component';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
    
      <div className="App">
        <Switch>
          <Route path='/profileSelect' component={profileChooser}/>
          <Route path='/events' component={eventFinder}/>
        </Switch>
      </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
