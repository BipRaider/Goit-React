import React from 'react';
import PropTypes from 'prop-types';
import FLS from './FriendListStyles';

function FriendList({ friends }) {
	return (
		<FLS.List>
			{friends.map((value) => (
				<FLS.ListItem key={value.id}>
					<FLS.ListSpan data-name="status" inStock={value.isOnline} />
					<FLS.ListImg data-avatar="avatar" src={value.avatar} alt={value.name} width="48" />
					<FLS.ListP data-name="name">{value.name}</FLS.ListP>
				</FLS.ListItem>
			))}
		</FLS.List>
	);
}

FriendList.propTypes = {
	friends: PropTypes.arrayOf(
		PropTypes.exact({
			avatar: PropTypes.string.isRequired,
			name: PropTypes.string.isRequired,
			isOnline: PropTypes.bool.isRequired,
			id: PropTypes.number.isRequired
		})
	).isRequired
};

export default FriendList;
