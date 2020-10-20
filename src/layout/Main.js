import React , { useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import Home from '../pages/Home';
import { useSelector } from 'react-redux';
const Main = (props) => {
    const isLogged = useSelector(state => state.auth.isLogged);
    const history = useHistory();
    useEffect(() => {
        console.log('is logged: ', isLogged)
        //history.push('/');
    }, [isLogged]);
    return (
        <main>
            <Switch>
                <Route exact path="/" component={Home}></Route>
            </Switch>
        </main>
    );
};
export default Main;
