import { fromJS, is } from 'immutable';

const blankQueue = {
	type: 'Person',
	people: [],
	order: null,
};

const emptyQueue = accumulator => {
	if(accumulator.getIn(['queue', 'people']).size < 1) {
		return accumulator;
	}

	return accumulator.update('output', output => (
		output.push(accumulator.get('queue'))
	)).set('queue', fromJS(blankQueue));
};

const reduceAdjacent = (accumulator, resource) => {
	if(is(resource.get('type'), 'Person')) {
		return accumulator.update('queue', queue => (
			queue.update('people', people => (
				people.push(resource.get('name'))
			)).set('order', resource.get('order'))
		));
	} else {
		return emptyQueue(accumulator)
			.update('output', output => output.push(resource));
	}
};

export default resources => (
	emptyQueue(fromJS(resources)
		// sort (by order)
		.sortBy(resource => resource.get('order'))
		// process adjacent resources
		.reduce(reduceAdjacent, fromJS({
			queue: blankQueue,
			output: []
		}))
	).get('output')
);

