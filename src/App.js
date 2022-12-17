import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './Home';
import SearchPage from './SearchPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/search" element={<SearchPage />}>
          </Route>
          <Route path="/" element={<Home />}>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
