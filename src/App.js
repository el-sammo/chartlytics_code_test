import React, { Component } from 'react';
import resourceReducer from './resourceReducer';
import resources from './resources.json';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = resourceReducer(resources);
	}

	render() {
		return (
			<div className="container">
				<table className="table table-striped">
					<thead className="">
						<tr>
							<th className="col-md-3">Type</th>
							<th className="col-md-3">Order</th>
							<th className="col-md-3">People / Name</th>
						</tr>
					</thead>
					<tbody className="">
						{this.state.map((row, key) => (
							<tr className="" key={key}>
								<td className="col-md-3">
									{row.get('type')}
								</td>
								<td className="col-md-3">
									{row.get('order')}
								</td>
								<td className="col-md-3">
									{row.get('people') ? row.get('people').join(', ') : row.get('name')}
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		);
	}
}

export default App;
