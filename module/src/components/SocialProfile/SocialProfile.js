import React from 'react';
import PropTypes from 'prop-types';
import SPS from './SocialProfileStyles';

function SocialProfile({ user }) {
	const { followers, views, likes } = user.stats;
	return (
		<SPS.Article>
			<SPS.Description>
				<SPS.Avatar src={user.avatar} alt={user.name} />
				<SPS.Name>{user.name}</SPS.Name>
				<SPS.P>{user.tag}</SPS.P>
				<SPS.P>{user.location}</SPS.P>
			</SPS.Description>

			<SPS.Stats>
				<SPS.Li>
					<SPS.Label>Followers</SPS.Label>
					<SPS.Count>{followers}</SPS.Count>
				</SPS.Li>
				<SPS.Li>
					<SPS.Label>Views</SPS.Label>
					<SPS.Count>{views}</SPS.Count>
				</SPS.Li>
				<SPS.Li>
					<SPS.Label>SPS.Likes</SPS.Label>
					<SPS.Count>{likes}</SPS.Count>
				</SPS.Li>
			</SPS.Stats>
		</SPS.Article>
	);
}

SocialProfile.propTypes = {
	user: PropTypes.exact({
		name: PropTypes.string.isRequired,
		tag: PropTypes.string.isRequired,
		location: PropTypes.string.isRequired,
		avatar: PropTypes.string.isRequired,
		stats: PropTypes.exact({
			followers: PropTypes.number.isRequired,
			views: PropTypes.number.isRequired,
			likes: PropTypes.number.isRequired
		})
	}).isRequired
};

export default SocialProfile;
