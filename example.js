var tem = require('./index.js');

var result = tem.template("[crnr] [b] something else [c]", function(match, callback) {
	switch(match) {
		case 'crnr': callback(false, 'CR-KULI-01'); break;
		case 'b': callback(false, 'This is B'); break;
		case 'c': callback(false, 'This is C'); break;
		default: callback(true, 'Undefined Match');
	};
	
}, function(err, result) {
	console.log(result);
});
console.log(result);