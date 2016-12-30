import resources from './resources.json';
import resourceReducer from './resourceReducer';

it('reduces resources', () => {
	expect(resourceReducer(resources)).toEqual([
		{
			"type": "Person",
			"order": 1,
			"people": [
				"Brian"
			]
		},
		{
			"type": "Place",
			"order": 2,
			"name": "Ohio"
		},
		{
			"type": "Place",
			"order": 12,
			"name": "Ohio"
		},
		{
			"type": "Person",
			"order": 19,
			"people": [
				"Sarah",
				"Eric"
			]
		},
		{
			"type": "Place",
			"order": 20,
			"name": "Home"
		},
		{
			"type": "Person",
			"order": 199,
			"people": [
				"Sam"
			]
		}
	]);
});
