const scraping = require('./index');

const fn = function (browser, page, options, done) {
	page.includeJs("http://ajax.googleapis.com/ajax/libs/jquery/1.6.1/jquery.min.js", function () {
		page.evaluate(
			function () {
				//https://www.amazon.it/gp/offer-listing/B01F5IJT2G/ref=olp_twister_all/251-0499081-5123818?ie=UTF8&mv_color_name=1&mv_size_name=all
				return $('#variationsTwister ul li:last-child a')[0].href;
			},
			function (error, title) {
				if (!title) {
					return done(new Error('The page has no title!'));
				}
				done(null, title);
			}
		);
	});
}

const url = 'https://www.amazon.it/gp/offer-listing/B01DKOT1XY?SubscriptionId=AKIAJKHMUVA2QK66ALCA&tag=nembol08-20&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B01DKOT1XY'


scraping(url, undefined, fn).then(result => console.log(result)).catch(err => console.error(err));