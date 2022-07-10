import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Checkout from './Checkout';
import Login from './Login';
import React, { useEffect } from 'react';
import { auth } from './Fire';
import { useStateValue } from './StateProvider';
import Payment from './Payment'
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const promise = loadStripe('pk_test_51LAaKcJr1fdiFUW8Z96RsQtuoksp0QAAaXZ5in0PDbSF3t0POnRMoIEd8F2IAVsicKPnkr6jvaauqveuc4xm4aYP00yZHk0IQN');

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
}, []);
  
  return (
    <Router>
    <div className="App">
      <Switch>
        <Route path='/Login'>
          <Login />
        </Route>
      <Route path='/Checkout'>
        <Header />
        <Checkout />
      </Route>
      <Route path='/Payment'>
        <Header />
        <Elements stripe={promise}>
        <Payment />
        </Elements>
      </Route>
        <Route path='/'> 
          <Header />
          <Home />
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
