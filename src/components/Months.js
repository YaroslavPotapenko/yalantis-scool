import React, { Component } from 'react';

export default class Months extends Component {
	
	render() {
		const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
		const data = this.props.data;
		let amount = [];

		data.map( el => {
			return amount.push(new Date(el.dob).getMonth());
		});
		let result = {};
		amount.forEach(function(a){
			result[a] = result[a] + 1 || 1;
		});

		return (
			<div className="thumbnail">
				<div className="thumbnail-caption">
				<table className="user-info table">
					<thead>
						<tr>
							<th>List of months</th>
						</tr>
					</thead>
					<tbody>
						{months.map((el,i) => <tr key={i}><td month={i} dobs={result[i]} onMouseOver={() => {
							this.props.updateMonth(i);
						}}>{el}</td></tr>)}
					</tbody>
				</table>
				</div>
			</div>
		);
	}
};