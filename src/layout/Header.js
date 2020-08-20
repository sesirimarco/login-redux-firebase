import React from 'react';
import tomatoTimer from '../img/tomatotimer.png';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Navbar from 'react-bootstrap/Navbar';
import UserDisplay from '../components/UserDisplay'
const Header = () => {
    let user = useSelector((state) => state.user);
    return (
        <header>
            <Navbar bg="light" variant="light">
                <Navbar.Brand> 
                    <NavLink to="/">
                        <img src={tomatoTimer} className="w-25" alt=""/>
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
                            />
                             
                        ) : (
                            <NavLink to="/signin">Sign in</NavLink>
                        )}
                    </Navbar.Text>
                </Navbar.Collapse>
            </Navbar>
        </header>
    );
};
export default Header;
