import React from 'react';
import PropTypes from 'prop-types';
import THS from './TransactionHistoryStyled';
import RandomRGB from '../RandomRGB';

function TransactionHistory({ items }) {
	return (
		<THS.TransactionHistory>
			<THS.Thead rgb={RandomRGB}>
				<THS.Tr>
					<THS.ItemT>Type</THS.ItemT>
					<THS.ItemT>Amount</THS.ItemT>
					<THS.ItemT>Currency</THS.ItemT>
				</THS.Tr>
			</THS.Thead>

			<THS.Tbody>
				{items.map((value) => (
					<THS.Tr key={value.id}>
						<THS.Item>{value.type}</THS.Item>
						<THS.Item>{value.amount}</THS.Item>
						<THS.Item>{value.currency}</THS.Item>
					</THS.Tr>
				))}
			</THS.Tbody>
		</THS.TransactionHistory>
	);
}

TransactionHistory.propTypes = {
	items: PropTypes.arrayOf(
		PropTypes.exact({
			type: PropTypes.string.isRequired,
			amount: PropTypes.string.isRequired,
			currency: PropTypes.string.isRequired,
			id: PropTypes.string.isRequired
		})
	).isRequired
};

export default TransactionHistory;
