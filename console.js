var out = $('#output');

console.log = function(str) {
	var line = '<div><span style="color: #999">&gt;</span> ' + str + '</div>';
	out.append(line);
};
