import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Layout from "../containers/Layout";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Login from "../pages/Login";
import PasswordRecovery from "../pages/PasswordRecovery";
import NewPassword from "../pages/NewPassword";
import CreateAccount from "../pages/CreateAccount";
import MyAccount from "../pages/MyAccount";
import "../styles/global.css";
import Orders from '../pages/Orders';
import Checkout from '../pages/Checkout';
import SendEmail from "../pages/SendEmail";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/sign-up" component={CreateAccount} />
          <Route exact path="/account" component={MyAccount} />
          <Route exact path="/password-recovery" component={PasswordRecovery} />
          <Route exact path="/new-password" component={NewPassword} />
          <Route exact path="/orders" component={Orders} />
          <Route exact path="/checkout" component={Checkout} />
          <Route exact path="/send-email" component={SendEmail} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
