let globalNames = [ 'Um', 'Dois', 'Três', 'Quatro' ];
let nameInput = null;
let isEditing = false;
let currentIndex = null;

window.addEventListener('load', () => {
	nameInput = document.querySelector('#nameInput');
	preventFormSubmit();
	activateInput();
	render();
});

function preventFormSubmit() {
	function handleFormSubmit(event) {
		event.preventDefault();
	}

	var form = document.querySelector('form');
	form.addEventListener('submit', handleFormSubmit);
}

function activateInput() {
	function insertName(newName) {
		//	globalNames.push(newName);
		globalNames = [ ...globalNames, newName ];
	}

	function updateName(newName) {
		globalNames[currentIndex] = newName;
	}

	function handleTyping(event) {
		if (event.key === 'Enter' && event.target.value.trim() !== '') {
			if (isEditing) {
				updateName(event.target.value);
			} else {
				insertName(event.target.value);
			}

			render();
			isEditing = false;
			clearInput();
		}
	}
	nameInput.addEventListener('keyup', handleTyping);
	nameInput.focus();
}

function render() {
	function createDeleteButton(index) {
		function deleteName() {
			//	globalNames.splice(index, 1);

			/*globalNames = globalNames.filter((name, i) => {
				if (i === index) {
					return false;
				}

				return true;
			});*/

			globalNames = globalNames.filter((name, i) => i !== index);

			render();
		}

		var button = document.createElement('button');
		button.classList.add('deleteButton');
		button.textContent = 'x';
		button.addEventListener('click', deleteName);
		return button;
	}

	function createSpan(name, index) {
		function editItem() {
			nameInput.value = name;
			nameInput.focus();
			isEditing = true;
			currentIndex = index;
		}

		var span = document.createElement('span');
		span.classList.add('clickable');
		span.textContent = name;
		span.addEventListener('click', editItem);

		return span;
	}

	var divNames = document.querySelector('#names');
	divNames.innerHTML = '';

	var ul = document.createElement('ul');

	for (var i = 0; i < globalNames.length; i++) {
		var currentName = globalNames[i];

		var li = document.createElement('li');
		var button = createDeleteButton(i);
		var span = createSpan(currentName, i);

		li.appendChild(button);
		li.appendChild(span);

		ul.appendChild(li);
	}

	divNames.appendChild(ul);
	clearInput();
}
/*
function clearInput() {
	nameInput.value = '';
	nameInput.focus();
}*/
const clearInput = () => {
	nameInput.value = '';
	nameInput.focus();
};