import React,{Fragment} from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Header  from './components/layout/Header';
import Home from './components/pages/Home';
import About from './components/pages/About';
import 'bootstrap/dist/css/bootstrap.min.css';

import CategoryState from './context/category/CategoryState'

function App() {
  return (
    <CategoryState>
    <Router>
        <Fragment>

        <Header />

           <div className='container'>
            <Switch>
              <Route exact path='/' component={Home}/>
              <Route exact path='/about' component={About}/>
            </Switch>
           </div>

        </Fragment>
       </Router>
    </CategoryState>
  );
}

export default App;
