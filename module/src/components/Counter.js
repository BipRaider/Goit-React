import React, { Component } from 'react';
//https://ru.reactjs.org/docs/handling-events.html
//https://ru.reactjs.org/docs/events.html#clipboard-events
class Counter extends Component {
	static defaultProps = {
		step: 5,
		initialValue: 3
	};

	state = {
		value: this.props.initialValue,
		st: this.props.step,
		newNum: 10,
		message: new Date().toLocaleTimeString()
	};
	// handleIncrement = () => this.setState({ value: (this.state.value + this.state.st) });
	// handleDecrement = () => this.setState({ value: this.state.value - this.state.st });
	handleIncrement = () =>
		this.setState({
			value: this.state.value * this.state.st,
			newNum: this.state.newNum + this.state.st
		});
	handleDecrement = () =>
		this.setState({
			value: this.state.value / this.state.st,
			newNum: this.state.newNum - this.state.st
		});
	upDateTime = () => this.setState({ message: new Date().toLocaleTimeString() });

	render() {
		return (
			<div>
				<button type="button" onClick={this.handleIncrement}>
					Increment by
				</button>
				<span>
					{this.state.value}--{this.state.newNum}
				</span>

				<button type="button" onClick={this.handleDecrement}>
					Decrement by
				</button>
				<button type="button" onClick={this.upDateTime}>
					{this.state.message}
				</button>
			</div>
		);
	}
}

export default Counter;
