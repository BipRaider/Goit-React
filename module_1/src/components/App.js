import React, { Fragment } from 'react';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
//App styled
import AS from './AppStyles';
//Section
import Section from './Section';
//Counter
import Counter from './Counter'; // "это не относиться к заданию"
//Friend list
import FriendList from './FriendList';
import FriendJSON from './FriendList/friends.json';
//SocialProfile
import SocialProfile from './SocialProfile';
import SocialProfileJSON from './SocialProfile/user.json';
//Statistics
import Statistics from './Statistics';
import StatisticsJSON from './Statistics/statistical-data.json';
//TransactionHistory
import TransactionHistory from './TransactionHistory';
import TransactionHistoryJSON from './TransactionHistory/transactions.json';
function App() {
	return (
		<Fragment>
			<Router>
				<AS.Nav>
					<AS.Ul>
						<AS.Li>
							<Link to="/" className="link_item">
								Home
							</Link>
						</AS.Li>
						<AS.Li>
							<Link to="/counter" className="link_item">
								Counter
							</Link>
						</AS.Li>
						<AS.Li>
							<Link to="/friend" className="link_item">
								Friend List
							</Link>
						</AS.Li>
						<AS.Li>
							<Link to="/stats" className="link_item">
								Statistics
							</Link>
						</AS.Li>
						<AS.Li>
							<Link to="/users" className="link_item">
								Social Profile
							</Link>
						</AS.Li>
						<AS.Li>
							<Link to="/items" className="link_item">
								Transaction History
							</Link>
						</AS.Li>
					</AS.Ul>
				</AS.Nav>

				<Route path="/counter">
					<Counter />
				</Route>
				<Route path="/friend">
					<Section title="Task-1">
						<FriendList friends={FriendJSON} />
					</Section>
				</Route>
				<Route path="/users">
					<Section title="Task-2">
						<SocialProfile user={SocialProfileJSON} />
					</Section>
				</Route>
				<Route path="/stats">
					<Section title="Task-3">
						<Statistics stats={StatisticsJSON} />
					</Section>
				</Route>
				<Route path="/items">
					<Section title="Task-4">
						<TransactionHistory items={TransactionHistoryJSON} />
					</Section>
				</Route>
			</Router>
			{/* <Section title="Task-1">
				<FriendList friends={FriendJSON} />
			</Section>
			<Section title="Task-2">
				<SocialProfile user={SocialProfileJSON} />
			</Section>
			<Section title="Task-3">
				<Statistics stats={StatisticsJSON} />
			</Section>
			<Section title="Task-4">
				<TransactionHistory items={TransactionHistoryJSON} />
			</Section> */}
		</Fragment>
	);
}

export default App;
