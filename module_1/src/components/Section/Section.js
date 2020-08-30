import React from 'react';
import PropTypes from 'prop-types';
import SS from './SectionStyles';

function Section({ title, children }) {
	return (
		<SS.Sections>
			<SS.Title> {title}</SS.Title>
			{children}
		</SS.Sections>
	);
}

Section.defaultProps = {
	title: 'Start sections'
};
Section.propTypes = {
	title: PropTypes.string,
	children: PropTypes.node.isRequired
};

export default Section;
