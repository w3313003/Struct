import React from 'react'
import { BrowserRouter as Router, NavLink, Route, Redirect, Switch, withRouter } from 'react-router-dom'

import Index from '../pages/index';
import List from '../pages/list';
import Setting from '../pages/setting';

class Logout extends React.Component {
	render() {
		return (
			<div style={{ textAlign: 'center' }}>
				退出登陆
			</div>
		)
	}
}

class Login extends React.Component {
	clickHandler = () => {
		this.props.history.push('/app')
	}
	render() {
		return (
			<div onClick={this.clickHandler}>
				登陆
			</div>
		)
	}
}

class Layout extends React.Component {
	render() {
		return (
			<div>
				<NavLink to='/app/firstPage'>
					第一页
				</NavLink>
				<NavLink to={`${this.props.match.url}/secondPage`}>
					第二页
				</NavLink>
				<Switch>
					<Route name={232} path={`${this.props.match.url}/firstPage`} render={() => <FirstPage />} />
					<Route path={`${this.props.match.url}/secondPage`} render={() => <SecondPage />} />
				</Switch>
			</div>
		)
	}
}

@withRouter
class FirstPage extends React.Component {
	handler = () => {
		this.props.history.push('/app/secondPage', { name: 12312 })
	}
	render() {
		console.log(this.props)
		return (
			<div onClick={this.handler}>
				第一页
			</div>
		)
	}
};
@withRouter
class SecondPage extends React.Component {
	handler = () => {
		this.props.history.push({
			pathname: `/app/firstPage`,
			search: '?sort=name',
		})
	}
	render() {
		console.log(this.props)
		return (
			<div onClick={this.handler}>
				第二页
			</div>
		)
	}
};

export default class extends React.Component {
	render() {
		return (
			<Router basename="/test">
				<Switch>
					<Route exact path='/' component={Login} />
					<Route name='123' path='/app' component={Layout} />
					<Route path='/login' component={Login} />
					<Route path='/logout' component={Logout} />
				</Switch>
			</Router>
		)
	}
}
