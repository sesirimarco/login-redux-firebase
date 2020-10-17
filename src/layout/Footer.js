import React from 'react';
import * as ReactBootstrap from 'react-bootstrap';
const Container = ReactBootstrap.Container;
const Footer = () => {
    return (
        <Container>
            <footer className="py-4 text-center text-secondary">
                <small><p >&copy; Pomodorus 2020. All Rights Reserved.</p></small>
            </footer>
        </Container>
    );
};
export default Footer;