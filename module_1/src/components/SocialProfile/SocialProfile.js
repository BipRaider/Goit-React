import React from 'react';
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

export default SocialProfile;
