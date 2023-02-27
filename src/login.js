'use strict';

const form = document.querySelector('form');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    if (form.checkValidity()) {
      form.classList.add('d-none');
      document.querySelector('.alert').classList.remove('d-none');
    } else {
      form.classList.add('was-validated');
      document.querySelector('button').disabled = true;
    }
});


const password = document.querySelector('#passwordInput');
const uname = document.querySelector('#unameInput');

password.addEventListener('input', function() {
    if (password.value === uname.value) {
        password.setCustomValidity('');
    } else {
        password.setCustomValidity('You must enter a valid password.');
        document.querySelector('#passwordFeedback').textContent = 'You must enter a valid password.';
    }
});

const allInputs = document.querySelectorAll('input');

allInputs.forEach(function(element) {
  element.addEventListener('input', function() {
    let checked = form.classList.contains('was-validated');
    if (checked) {
      if (form.checkValidity()) {
        document.querySelector('button').disabled = false;
      } else {
        document.querySelector('button').disabled = true;
      }
    }
  })
}); 
