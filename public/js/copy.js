function copy(text) {
	navigator.clipboard.writeText(text).then(function() {
		alert(text+' copied to clipboard');
	}, function(err) {
		alert('could not copy to clipboard');
	});
}
