import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const UserDisplay = ({name, url}) => {

    return (
        <>
        <Row>
            <Col className="md-3">
                <img 
                    src={url} 
                    alt={name} 
                    className="img-thumbnail float-left w-25 rounded-circle border border-primary">
                    
                </img>
            </Col>
            <Col className="md-9">
                <h5>{name}</h5>
            </Col>
        </Row>
        </>
    );
};
export default UserDisplay;