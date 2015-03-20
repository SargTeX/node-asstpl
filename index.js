var regex = require('node-regexp');
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
		for(var res in results) {
			match = results[res].substring(1, 2);
			mapping(match, function(err, result) {
				if (err) return callback(err);

				//console.log(results[res], match, result);
				content = content.replace(results[res], result);
			});
		}
		return content;
	}
};