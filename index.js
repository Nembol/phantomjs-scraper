const truffler = require('truffler');
const path = require('phantomjs-prebuilt').path;


module.exports = function (url, optionsPersonal = {}, fn) {
	const options = {
		log: {
			info: console.info.bind(console)
		},
		phantom: {
			path
		}
	};
	return new Promise((reject, resolve) => {
		const test = truffler(options, fn.bind(null));
		test.run(url, function (error, results) {
			return error ? reject(error) : resolve(results); 
		});

	});
};
