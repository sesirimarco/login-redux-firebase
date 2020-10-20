import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
const MenuLogin = ({title, login}) => {

    return (
			<>
				<Dropdown>
					<DropdownButton id="dropdown-basic" title="Login" variant="info">
						<Dropdown.Item
							href="#"
							onClick={() => {
								login();
							}}
						>
							{title}
						</Dropdown.Item>
					</DropdownButton>
				</Dropdown>
			</>
		);
};
export default MenuLogin;