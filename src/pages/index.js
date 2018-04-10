import React from 'react';

export default class extends React.Component {
	clickHandler = () => {
		this.props.history.push('/Special')
	}
	render() {
		console.log(this.props);
		return (
			<div>
				<button onClick={this.clickHandler}>to special</button>
			</div>
		)
	}
}