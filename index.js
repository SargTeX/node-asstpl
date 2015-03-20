var async = require('async'),
	regex = require('node-regexp');
/*
var reg = regex()
	.start('[')
	.anything()
	.must(']')
	.global()
	.toRegExp();
*/
var reg = /\[(.*?)\]/g;

module.exports = {

	template: function(content, mapping, callback) {
		var results = content.match(reg);
		var match;
		async.each(results, function(res, next) {
			match = res.substring(1, res.length-1);
			mapping(match, function(err, result) {
				if (err) return next(err);

				//console.log(results[res], match, result);
				content = content.replace(res, result);
				next();
			});
		}, function(err) {
			if (err) return callback(err);

			callback(false, content);
		});
	}
};