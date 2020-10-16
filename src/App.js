import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import React, { createContext, useState } from 'react';
import './App.css';
import Home from './components/Home/Home/Home';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import Login from './components/Login/Login';
import OrderForm from './components/UserArea/OrderForm/OrderForm';
import OrderList from './components/UserArea/OrderList/OrderList';
import ReviewForm from './components/UserArea/ReviewForm/ReviewForm';
import ServicesList from './components/AdminArea/ServicesList/ServicesList';
import ServiceForm from './components/AdminArea/ServiceForm/ServiceForm';
import MakeAdmin from './components/AdminArea/MakeAdmin/MakeAdmin';

export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <PrivateRoute path="/dashboard" >
            <Dashboard></Dashboard>
          </PrivateRoute>
          {/* <Route path="/dashboard" >
               <Dashboard></Dashboard>
            </Route>    */}
          <PrivateRoute path="/makeOrder/:title">
            <OrderForm></OrderForm>
          </PrivateRoute>
          <Route path="/makeOrder" >
            <OrderForm></OrderForm>
          </Route>
          <Route path="/orderList" >
            <OrderList></OrderList>
          </Route>
          <PrivateRoute path="/addReview" >
            <ReviewForm></ReviewForm>
          </PrivateRoute>
          <Route path="/servicesList" >
            <ServicesList></ServicesList>
          </Route>
          <Route path="/addService" >
            <ServiceForm></ServiceForm>
          </Route>
          <Route path="/makeAdmin" >
            <MakeAdmin></MakeAdmin>
          </Route>
          <Route path="/login" >
            <Login></Login>
          </Route>

          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
