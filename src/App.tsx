import React from 'react';
import './styles/App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './Home';
import GameItem from './GameItem';
import EmptySpace from './components/EmptySpace';

function App() {
  return (
    <Router>
      <div className='app'>
        <Header />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/:id' exact component={GameItem} />
        </Switch>
        <EmptySpace height={40} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
