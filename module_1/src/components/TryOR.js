import React from 'react';
import PropTypes from 'prop-types';
import Counter from './Counter';

function TryOR(props) {
	const { nameIf, nameIfELse, child, children } = props;
	return (
		<div>
			<h2>Это мы test операторов if and if..else , и тернарное выражение (значение ? true : false) </h2>
			{console.log(props)}
			<div>
				<h2> This try or (nameIf) logics operator </h2>

				<p>{nameIf && `operator or true and === nameIf`}</p>
			</div>
			<div>
				<h2>Ternaries massage nameIf else </h2>
				<p>{nameIfELse ? `nameIfELse === true` : `nameIfELse=== false`}</p>
			</div>
			<div>
				<h3>Text is any</h3>
				{child ? <p>Child found </p> : <p>Child not found</p>}
			</div>
			{children}
			<Counter />
		</div>
	);
}

TryOR.defaultProps = {
	nameIf: '',
	nameIfELse: '',
	child: ''
};

TryOR.propTypes = {
	nameIf: PropTypes.string,
	nameIfELse: PropTypes.string,
	child: PropTypes.string,
	children: PropTypes.node
};

export default TryOR;
