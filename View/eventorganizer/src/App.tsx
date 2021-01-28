import React from 'react';
import logo from './logo.svg';
import './App.css';
import { store } from './store';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import profilechooserComponent from './components/profilechooser/profilechooser.component';
import eventfinderComponent from './components/eventfinder/eventfinder.component';
import eventviewerComponent from './components/eventfinder/eventviewer/eventviewer.component';
import eventeditorComponent from './components/eventfinder/eventviewer/eventeditor/eventeditor.component';
import eventcreatorComponent from './components/eventfinder/eventcreator/eventcreator.component';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
    
      <div className="App">
        <Switch>
          <Route path='/profileSelect' component={profilechooserComponent}/>
          <Route path='/events' component={eventfinderComponent}/>
          <Route path='/events/view' component={eventviewerComponent}/>
          <Route path='/events/edit' component={eventeditorComponent}/>
          <Route path='/events/add' component={eventcreatorComponent}/>
        </Switch>
      </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
