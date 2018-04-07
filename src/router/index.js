import React from 'react'
import { HashRouter as Router, NavLink, Route, Redirect} from 'react-router-dom'

import Index from '../pages/index';
import List from '../pages/list';
import Setting from '../pages/setting';

export default class extends React.Component {
	render() {
		return (
			<Router>
				<ul>
					<li>
						<NavLink to='/Index'>Index</NavLink>
					</li>
					<li>
						<NavLink to='/List'>List</NavLink>
					</li>
					<li>
						<NavLink to='/Setting'>Setting</NavLink>
					</li>
					<div>
						<Route path='/' exact render={() => <Redirect to='/Index'/>}/>
						<Route path='/Index' component={Index}/>
						<Route path='/List' component={List}/>
						<Route path='/Setting' component={Setting}/>
					</div>
				</ul>
			</Router>
		)
	}
}