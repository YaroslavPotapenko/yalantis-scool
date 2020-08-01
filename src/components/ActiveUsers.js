import React, { Component } from 'react';
import UserData from './UserData';

export default class ActiveUsers extends Component {
	
	render() {
		const data = this.props.data;
		const month = this.props.month;
		if (!data) { return (<p>Loading...</p>); }

		let list;
		
		switch (month) {
			case 0:
				list = data.map( el => new Date(el.dob).getMonth() === 0 ? (<UserData user={el} key={el.id} />) : null )
			break;
			case 1:
				list = data.map( el => new Date(el.dob).getMonth() === 1 ? (<UserData user={el} key={el.id} />) : null )
			break;
			case 2:
				list = data.map( el => new Date(el.dob).getMonth() === 2 ? (<UserData user={el} key={el.id} />) : null )
			break;
			case 3:
				list = data.map( el => new Date(el.dob).getMonth() === 3 ? (<UserData user={el} key={el.id} />) : null )
			break;
			case 4:
				list = data.map( el => new Date(el.dob).getMonth() === 4 ? (<UserData user={el} key={el.id} />) : null )
			break;
			case 5:
				list = data.map( el => new Date(el.dob).getMonth() === 5 ? (<UserData user={el} key={el.id} />) : null )
			break;
			case 6:
				list = data.map( el => new Date(el.dob).getMonth() === 6 ? (<UserData user={el} key={el.id} />) : null )
			break;
			case 7:
				list = data.map( el => new Date(el.dob).getMonth() === 7 ? (<UserData user={el} key={el.id} />) : null )
			break;
			case 8:
				list = data.map( el => new Date(el.dob).getMonth() === 8 ? (<UserData user={el} key={el.id} />) : null )
			break;
			case 9:
				list = data.map( el => new Date(el.dob).getMonth() === 9 ? (<UserData user={el} key={el.id} />) : null )
			break;
			case 10:
				list = data.map( el => new Date(el.dob).getMonth() === 10 ? (<UserData user={el} key={el.id} />) : null )
			break;
			case 11:
				list = data.map( el => new Date(el.dob).getMonth() === 11 ? (<UserData user={el} key={el.id} />) : null )
			break;
		
			default:
				list = <tr>
				<td></td>
				<td></td>
				<td></td>
				<td></td>
			</tr>
			break;
		}
		
		return (
			<table className="user-list table table-striped">
				<thead>
				<tr>
					<th>ID</th>
					<th>First Name</th>
					<th>Last Name</th>
					<th>DOB</th>
				</tr>
				</thead>

				<tbody>
					{list}
				</tbody>
			</table>
		);
		
	}
};
