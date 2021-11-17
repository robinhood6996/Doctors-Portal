import './App.css';
import Home from './pages/Home/Home/Home';
import Appointment from './pages/Appointment/Appointment/Appointment';
import Login from './pages/Login/Login';
import Register from './pages/Login/Register/Register';
import AuthProvider from './context/AuthProvider/AuthProvider';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Dashboard from './pages/Dashhboard/Dashboard/Dashboard';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <PrivateRoute path="/appointment">
            <Appointment />
          </PrivateRoute>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <PrivateRoute path="/Dashboard">
            <Dashboard />
          </PrivateRoute>


        </Switch>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
