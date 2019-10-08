let form = document.getElementsByClassName('form');
let inputs = document.querySelectorAll('input');

form[0].addEventListener('input', function(e) {
	if (e.target.id !== 'email') {
		if (e.target.validity.valid) {
			e.target.nextElementSibling.textContent = '';
			e.target.classList.remove('invalid-form-text');
		}
	} else {
		if (!e.target.validity.valid) {
			e.target.classList.add('invalid-form-text');
			e.target.nextElementSibling.textContent = e.target.nextElementSibling.dataset.msg;
		} else {
			e.target.classList.remove('invalid-form-text');
			e.target.nextElementSibling.textContent = '';
		}
	}
});

let submitFunc = (e) => {
	e.preventDefault();
	for (let i = 0; i < inputs.length; i++) {
		if (inputs[i].value === '') {
			inputs[i].placeholder = '';
			inputs[i].nextElementSibling.textContent = inputs[i].nextElementSibling.dataset.msg;
			inputs[i].className = 'invalid-form-text';
			inputs[i].style.borderColor = '#c54c52';
			if (i === 2) {
				inputs[2].placeholder = inputs[i].nextElementSibling.dataset.text;
				inputs[2].className = 'holder-color';
			}
		} else {
			inputs[i].classList.remove('invalid-form-text');
			inputs[i].style.borderColor = 'green';
		}
	}
};
form[0].addEventListener('submit', submitFunc);
