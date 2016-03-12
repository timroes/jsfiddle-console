var out = document.getElementById('output');

console.log = function(str) {
	var line = '<div style="font-family:monospace;line-height:1.7"><span style="color: #999">&gt;</span> ' + str + '</div>';
	out.innerHTML += line;
};
