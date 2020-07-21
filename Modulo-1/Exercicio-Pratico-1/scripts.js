window.addEventListener('load', start);

function start() {
	console.log('DOM está carregado');

	var red = document.querySelector('#red-range').value;
	var green = document.querySelector('#green-range').value;
	var blue = document.querySelector('#blue-range').value;

	document.querySelector('#redbox').value = red;
	document.querySelector('#greenbox').value = green;
	document.querySelector('#bluebox').value = blue;

	changeColor(red, green, blue);

	document.querySelector('#red-range').addEventListener('input', start);
	document.querySelector('#green-range').addEventListener('input', start);
	document.querySelector('#blue-range').addEventListener('input', start);
}

function changeColor(red, green, blue) {
	var color = 'rgb(' + red + ',' + green + ',' + blue + ')';
	colorResult.style.backgroundColor = color;
}
