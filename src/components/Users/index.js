import React, { Component } from 'react';
import { Button, Preloader, Icon, Modal, Table } from 'react-materialize';
import  { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import * as usersActions from '../../state/actions/usersActions';


class Users extends Component {

	componentDidMount() {
		this.props.getUsers()
	}

	desplegar = () => (
		this.props.users.map((user) => (
			<tr key={user._id}>
				<td>{user.nombre}</td>
				<td>{user.apellidos.paterno}</td>
				<td>{user.apellidos.materno}</td>
				<td>{user.edad}</td>
				<td><Link to={`/dependientes/${user._id}`}><Icon>visibility</Icon></Link>
				</td>
				<td><Link to="/edit"><Icon>edit</Icon></Link></td>
				<td>
					<Modal header="Eliminar usuario"
					actions={
							<div>
							<Button className="red modal-close"
								onClick={() => this.props.deleteUser(user._id)}>
								Sí
								</Button>
								<Button className="green modal-close">No</Button>
							</div>
						}
						trigger={<Link to="/"><Icon>delete</Icon></Link>}
					>
						<p>¿Desea eliminar a {user.nombre}?</p>
					</Modal>
				</td>
			</tr>
		))
	);

	removeUser = (key) => {
		this.props.deleteUser(key);
	};

	render() {
		return (
			<div style={{margin: '100px'}}>
				<h1>Usuarios</h1>
				<Button floating large className='red lighten-1' waves='light' icon='add' />
				{ (this.props.loading) ? <Preloader size="big" /> : '' }
				{ this.props.error }

        <Table centered responsive>
          <thead>
            <tr>
                <th data-field>Nombre</th>
                <th data-field>Ap. Materno</th>
                <th data-field>Ap.Paterno</th>
								<th data-field>Edad</th>
								<th data-field>Dependientes</th>
								<th data-field></th>
								<th data-field></th>
            </tr>
          </thead>

          <tbody>
						{ this.desplegar() }
          </tbody>
        </Table>

				{console.log(this.state)}
				{/* <input value={ this.props.user.nombre } onChange={ this.changeName } />*/}

			</div>
		);
	}
}

const mapStateToProps = ({ usersReducer }) => usersReducer;


export default connect(mapStateToProps,usersActions)(Users);
