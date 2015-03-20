var ass = require('./index.js');

ass.template('[CR-Nr BCB] [Titel] ([Status])', function(match, callback) {
	switch (match) {
		case 'CR-Nr BCB': callback(false, 'CR-KULI-01'); break;
		case 'Titel': callback(false, 'Mehr Rotstifte für Quartalszahlen'); break;
		case 'Status': callback(false, 'In Bearbeitung'); break;
		default: callback(false, 'mismatch');
	}
}, function(err, result) {
	if (err) throw err;

	var expected = '#CR-KULI-01 Mehr Rotstifte für Quartalszahlen (In Bearbeitung)';
	if (result != expected) {
		console.error('Test failed;');
		console.log('Expected: "'+expected+'"');
		console.log('Got:      "'+result+'"');
	} else console.log('Test passed successfully!');
});