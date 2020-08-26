import React, { Fragment } from 'react';
import Section from './Section';
//Friend list
import FriendList from './FriendList';
import FriendJSON from './FriendList/friends.json';
//SocialProfile
import SocialProfile from './SocialProfile';
import SocialProfileJSON from './SocialProfile/user.json';

function App() {
	return (
		<Fragment>
			<Section title="Task-1">
				<FriendList friends={FriendJSON} />
			</Section>
			<Section title="Task-2">
				<SocialProfile user={SocialProfileJSON} />
			</Section>
		</Fragment>
	);
}

export default App;
