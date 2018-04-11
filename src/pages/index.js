import React from 'react';

export default class extends React.Component {
	clickHandler = (params = '/Special') => {
		this.props.history.push(params)
	}
	render() {
		console.log(this.props);
		return (
			<div>
				123
				<button onClick={this.clickHandler}>to special</button>
				<button onClick={() => this.clickHandler('/Index/child')}>to childe</button>
			</div>
		)
	}
}