import React from 'react';
import PropTypes from 'prop-types';
import SS from './StatisticsStyles';
import RandomRGB from '../RandomRGB.js';
// <!-- - Колір фону елемента статистики в оформленні можна пропустити, або створити
//   функцію для генерації випадкового кольору. -->

function Statistics({ stats }) {
	return (
		<SS.Statistics>
			<SS.Titel>Upload stats</SS.Titel>

			<SS.StatList>
				{stats.map((value) => (
					<SS.Item key={value.id} rgb={RandomRGB()}>
						<SS.Label>{value.label}</SS.Label>
						<SS.Percentage>{value.percentage}</SS.Percentage>
					</SS.Item>
				))}
			</SS.StatList>
		</SS.Statistics>
	);
}

Statistics.propTypes = {
	stats: PropTypes.arrayOf(
		PropTypes.exact({
			label: PropTypes.string.isRequired,
			percentage: PropTypes.number.isRequired,
			id: PropTypes.string.isRequired
		})
	).isRequired
};
export default Statistics;
