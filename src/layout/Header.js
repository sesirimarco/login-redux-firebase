import React, { useEffect } from 'react';
import tomatoTimer from '../img/tomatotimer.png';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Navbar from 'react-bootstrap/Navbar';
import UserDisplay from '../components/UserDisplay'
import MenuLogin from '../components/MenuLogin'
import { isLogged, signOut, signIn } from '../redux/actions/authActions';

const LOCAL_STORAGE_USER = 'user';
const Header = () => {
    const user = useSelector((state) => state.auth.user);
    const dispatch = useDispatch();
    useEffect(() => { 
        dispatch(isLogged());
        localStorage.setItem(LOCAL_STORAGE_USER, JSON.stringify(user));
    }, []);
    const logout = () => {
        dispatch(signOut());
    };
    const logingWithGoogle = () => {
        dispatch(signIn());
    };
    return (
        <header 
            className="container px-1"
            style={{ minWidth: 300, maxWidth: 700 }}
        >
            <Navbar bg="light" variant="light">
                <Navbar.Brand> 
                    <NavLink to="/">
                        <img 
                            src={tomatoTimer} 
                            alt="pomodore timer" 
                            width="50px"
                        />
                        Pomodoro timer
                    </NavLink>
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        {user ? (
                            <UserDisplay 
                                name={`Hi! ${user.displayName}`}
                                url={user.photoURL}
                                logout={() => { logout()}}
                            />
                             
                        ) : (
                            <MenuLogin 
                                title={`with Google`}
                                login={() => { logingWithGoogle()}}
                            />
                        )}
                    </Navbar.Text>
                </Navbar.Collapse>
            </Navbar>
        </header>
    );
};
export default Header;
