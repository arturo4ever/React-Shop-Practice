import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from '../containers/Layout';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import Login from '../pages/Login';
import RecoveryPassword from '../pages/RecoveryPassword';
import NewPassword from '../pages/NewPassword';
import CreateAccount from '../pages/CreateAccount';
import MyAccount from '../pages/MyAccount'
import '../styles/global.css';
import Header from '../components/Header';

const App = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/login" component={Login}/>
                    <Route exact path="/sign-up" component={CreateAccount}/>
                    <Route exact path="/account" component={MyAccount}/>
                    <Route exact path="/recovery-password" component={RecoveryPassword} />
                    <Route exact path="/new-password" component={NewPassword} />
                    <Route path="*" component= {NotFound} />
                </Switch>
            </Layout>
        </BrowserRouter>
    );
}

export default App;