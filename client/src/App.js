import React from 'react';
import { Route } from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline';
import Home from './components/cv/Home';
import Resume from './components/cv/Resume'
import Portfolio from './components/cv/Portfolio'
import Contacts from './components/cv/Contacts'
import Hub from './components/Hub'
import Exhibition_home from './components/exhibition/Exhibition_home'
import Collection_home from './components/collection/Collection_home'


function App() {
  return (
    <>
      <CssBaseline />
      <Route exact path="/" component={Hub} />
      <Route exact path="/hub/cv" component={Home} />
      <Route exact path="/hub" component={Hub} />
      <Route path="/hub/cv/resume" component={Resume} />
      <Route path="/hub/cv/portfolio" component={Portfolio} />
      <Route path="/hub/cv/contacts" component={Contacts} />
      <Route path="/hub/exhibition" component={Exhibition_home} />
      <Route path="/hub/collection" component={Collection_home} />
    </>
  );
}

export default App;
