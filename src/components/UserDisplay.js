import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
const UserDisplay = ({name, url, logout}) => {

    return (
        <>
            <Dropdown>
                    <Dropdown.Toggle variant="text-white" id="dropdown-basic" className="e-caret-hide">
                    <img 
                        src={url} 
                        alt={name} 
                        width="40px"
                        className="img-thumbnail rounded-circle border border-primary">
                    </img>
                    <h5 className="float-right p-2">{name}</h5>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#" onClick={() => {logout()}}>Logout</Dropdown.Item>
                </Dropdown.Menu>
                </Dropdown>
        </>
    );
};
export default UserDisplay;