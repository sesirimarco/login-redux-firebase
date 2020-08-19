import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Todos from '../pages/Todos';
import SignIn from '../pages/SignIn';
import { useSelector } from 'react-redux';
const Main = () => {
    const isLogged = useSelector(state => state.isLogged);
    return (
        <main>
            <Switch>
                <Route exact path="/" component={isLogged ? Todos :Home}></Route>
                <Route path="/signin" component={SignIn}></Route>
            </Switch>
        </main>
    );
};
export default Main;
