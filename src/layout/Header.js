import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
const Header = () => {
    let user = useSelector((state) => state.user);
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/">Todo List</NavLink>
                    </li>
                    <li>
                        {user ? (
                            <NavLink to="/signOut">Sign OUT</NavLink>
                        ) : (
                            <NavLink to="/signin">Sign in</NavLink>
                        )}
                    </li>
                </ul>
            </nav>
        </header>
    );
};
export default Header;
