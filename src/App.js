import React, { Component } from 'react';
import resourceReducer from './resourceReducer';
import resources from './resources.json';

import './App.css';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = resourceReducer(resources);
	}

	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="col-md-3">Type</div>
					<div className="col-md-3">Order</div>
					<div className="col-md-3">People / Name</div>
				</div>
				{this.state.map((row, key) => (
					<div className="row" key={key}>
						<div className="col-md-3">
							{row.get('type')}
						</div>
						<div className="col-md-3">
							{row.get('order')}
						</div>
						<div className="col-md-3">
							{row.get('people') ? row.get('people').join(', ') : row.get('name')}
						</div>
					</div>
				))}
			</div>
		);
	}
}

export default App;
