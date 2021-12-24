import react from "react";
import Home from "./componets/home-page";
import React, {useState, useEffect} from "react";
import {Link, Route, Switch} from 'react-router-dom'

// Dummy data
import data from '../src/data/index'

function fetchStock() {
  // fetchStock simulates getting data through axios.get(<URL>)
  return Promise.resolve({ success: true, data });
}

function App() {
  return (
    <div className="App">
      <nav>
        <h1 className='store-header'>African American Marketplace</h1>
        <div className='nav-links'>
          <Link to="/">Home</Link>
          <Link to="/items-list">Shop</Link>
        </div>
      </nav>
      <Switch>
        <Route path="/items-list/:itemID">
          <Item items={/*pass in items here here*/ } />
        </Route>
        <Route path="/items-list">
          <ItemsList items={/*pass in items here here*/} />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
