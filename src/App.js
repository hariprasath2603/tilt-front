import React from 'react';
import { Switch, Route } from 'react-router-dom';
import "./App.css"

import Nav from './comp/navbar';
import Landing from './comp/landing';
import MenuList from './comp/menuList';
import OrdersList from './comp/orderList';
import ChefList from './comp/chefList';

const App = () => {
  //routing based on the url
  return ( 
<React.Fragment>
    <Nav />
    <Switch>
    <Route exact path='/'>
      <Landing />
    </Route>
    <Route path='/menu'>
      <MenuList />
    </Route>
    <Route path='/order'>
      <OrdersList />
    </Route>
    <Route path='/chef'>
      <ChefList />
    </Route>
    </Switch>
</React.Fragment>

   );
}
 
export default App;