
/*

Util.js

Contains commonly used shortcuts and utilities

*/

var _ = {

	// promises
	p: {

	},
	all: function (list) {
		return Promise.all((list || []));
	},

	// console
	l: function () {
		console.log(arguments);
	}
}