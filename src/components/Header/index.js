import React from 'react';
import { Navbar } from 'react-materialize';
import { Link } from 'react-router-dom';


const Header = (props) => (
	<Navbar left>
		<li>
			<Link to='/'>
				Inicio
			</Link>
		</li>
		<li>
			<Link to='/usuarios'>
				Usuarios
			</Link>
		</li>
		<li>
			<Link to='/dependientes'>
				Dependientes
			</Link>
		</li>
	</Navbar>
);


export default Header;
