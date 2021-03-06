import { BrowserRouter, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import Booking from './Pages/Booking/Booking/Booking';


import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login';
import Header from './Pages/Shared/Header/Header';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import AddService from './Pages/AddService/AddService';
import ManageServices from './Pages/ManageServices/ManageServices';



function App() {
  return (
    <div className="App">
     <AuthProvider>
     <BrowserRouter>
      <Header></Header>
      <Switch>
        <Route exact path='/'>
        <Home></Home>
        </Route>
        <Route exact path='/home'>
        <Home></Home>
        </Route>
        <Route exact path='/login'>
        <Login></Login>
        </Route>
        <PrivateRoute path="/booking/:serviceId">
      <Booking></Booking>
        </PrivateRoute>
        <Route path='/addService'>
          <AddService></AddService>
        </Route>
        <Route path='/manageService'>
         <ManageServices></ManageServices>
        </Route>
      </Switch>
      </BrowserRouter>
     </AuthProvider>
     
    </div>
  );
}

export default App;
