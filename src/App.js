import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import AuthProvider from "./Assets/Context/AuthProvider";
import Footer from "./Common/commonComponents/Footer";
import Header from "./Common/commonComponents/Header";
import PrivateRoute from "./Common/utilityComponents/PrivateRoute"
import About from "./Pages/About/About";
import Home from "./Pages/Home/Home";
import NotFound from "./Pages/NotFound/NotFound";
import Login from "./Pages/Login/Login";
import AllPackages from './Pages/AllPackages/AllPackages'
import Order from "./Pages/Order/Order";
import MyOrders from "./Pages/MyOrders/MyOrders";
import ManageOrders from "./Pages/ManageOrders/ManageOrders";
import AddOrders from "./Pages/AddOrders/AddOrders";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/about">
            <About></About>
          </Route>
          <Route exact path="/allpackages">
            <AllPackages></AllPackages>
          </Route>
          <PrivateRoute exact path="/order/:packid">
            <Order></Order>
          </PrivateRoute>
          <PrivateRoute exact path="/myorders">
            <MyOrders></MyOrders>
          </PrivateRoute>
          <PrivateRoute exact path="/manageorders">
            <ManageOrders></ManageOrders>
          </PrivateRoute>
          <PrivateRoute exact path="/addorders">
            <AddOrders></AddOrders>
          </PrivateRoute>
            <Route exact path="/login">
            <Login></Login>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </AuthProvider>
  );
}

export default App;                             