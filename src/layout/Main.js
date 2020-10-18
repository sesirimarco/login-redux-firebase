import React , { useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import Home from '../pages/Home';
import SignIn from '../pages/SignIn';
import { useSelector } from 'react-redux';
const Main = () => {
    const isLogged = useSelector(state => state.auth.isLogged);
    const history = useHistory();
    useEffect(() => {
        history.push(
            isLogged 
            ? '/' 
            : 'signin'
        );
    }, [isLogged]);
    
    return (
        <main>
            <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route path="/signin" component={SignIn}></Route>
            </Switch>
        </main>
    );
};
export default Main;
