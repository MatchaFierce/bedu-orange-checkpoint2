import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as dependentsActions from '../../state/actions/dependentsActions';
import { Preloader } from 'react-materialize';


class Dependents extends Component {

	componentDidMount() {
		this.props.getDependent();
	}

	desplegar = () => (
		this.props.dependents.map((dependent, index) => (
			<li key={index}>
				{ dependent.nombre_completo }
			</li>
		))
	);

	changeName = (event) => {
		this.props.changeName(event.target.value);
	};

	render() {
		return (
			<div style={{margin: '100px'}}>
				<h1>Dependientes</h1>
        <table>
          <thead>
            <tr>
                <th>Nombre completo</th>
                <th>Dependencia</th>
                <th>Edad</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Alvin</td>
              <td>Eclair</td>
              <td>$0.87</td>
            </tr>
            <tr>
              <td>Alan</td>
              <td>Jellybean</td>
              <td>$3.76</td>
            </tr>
            <tr>
              <td>Jonathan</td>
              <td>Lollipop</td>
              <td>$7.00</td>
            </tr>
          </tbody>
        </table>

				{ this.props.error }

				{ (this.props.loading) ? <Preloader size='big'/> : '' }

				{ this.desplegar() }
			</div>
		);
	}
}

const mapStateToProps = ({ dependentsReducer }) => {
	return dependentsReducer;
}

export default connect(mapStateToProps, dependentsActions)(Dependents);
