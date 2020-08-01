import React from 'react';

const UserData = ({user}) => {
	if (!user) {
		return <tr>
					<td>loading...</td>
				</tr>
	} else {
		return <tr>
		<td>{user.id}</td>
		<td>{user.firstName}</td>
		<td>{user.lastName}</td>
		<td>{user.dob}</td>
	</tr>;
	}
};

export default UserData;