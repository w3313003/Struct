import React from 'react'
import { HashRouter as Router, NavLink, Route, Redirect} from 'react-router-dom'

import Index from '../pages/index';
import List from '../pages/list';
import Setting from '../pages/setting';

function Main() {
	return (
		<ul>
			<li>
				<NavLink to='/Index'>Index</NavLink>
			</li>
			<li>
				<NavLink to='/List+_212312'>List</NavLink>
			</li>
			<li>
				<NavLink to='/Setting'>Setting</NavLink>
			</li>
			<div>
				<Route path='/Index' component={Index}/>
				<Route path='/List+_212312' component={List}/>
				<Route path='/Setting' component={Setting}/>
			</div>
		</ul>
	)
}

function Special() {
	return (
		<div>
			Special
		</div>
	)
}

export default class extends React.Component {
	render() {
		return (
			<Router>
				<div>
					<Route path='/' component={Main}/>
					<Route exact path='/Special' component={Special} />
				</div>
			</Router>
		)
	}
}