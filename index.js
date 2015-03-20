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
		for(var index in results) {
			var res = results[index];
			match = res.substring(1, res.length-1);
			mapping(match, function(err, result) {
				if (err) return callback(err);

				//console.log(results[res], match, result);
				content = content.replace(res, result);
			});
		}
		return content;
	}
};