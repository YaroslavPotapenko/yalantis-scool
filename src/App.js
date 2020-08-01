import React, { Component } from 'react';
import Months from './components/Months';
import ActiveUsers from './components/ActiveUsers';
import './App.css';

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [],
			month: null,
			amountUsers: null
		}; 
	}

	componentDidMount() {
		this.loadData();
	}

	loadData = () => {
		fetch('https://yalantis-react-school-api.yalantis.com/api/task0/users')
		.then((response) => {
			return response.json();
		})
		.then((users) => {
			this.setState({
				data: users
			});
		});
	}

	updateMonth = (value) => {
		this.setState({ month: value })
	}

	render() {
		const td = document.getElementsByTagName('td');
		document.addEventListener('load', () => {
			Array.from(td).map( el => {
				if (el.hasAttribute('dobs')) {
					if ( el.getAttribute('dobs') <= 2 ) {
						el.parentNode.setAttribute('class','gray')
					} else if ( el.getAttribute('dobs') <= 6) {
						el.parentNode.setAttribute('class','blue')
					} else if ( el.getAttribute('dobs') <= 10) {
						el.parentNode.setAttribute('class','green')
					} else if (el.getAttribute('dobs') >= 11) {
						el.parentNode.setAttribute('class','red')
					}
				}
				return null;
			});
		}, true);

		return (
			<div className="app container-fluid">
				<div className="row">
					<div className="col-sm-8 col-md-9 col-lg-10">
						<ActiveUsers data={this.state.data} month={this.state.month}/>
					</div>
					<div className="col-sm-4 col-md-3 col-lg-2">
						<Months updateMonth={this.updateMonth} data={this.state.data} />
					</div>
				</div>
			</div>
		);
	}
}
