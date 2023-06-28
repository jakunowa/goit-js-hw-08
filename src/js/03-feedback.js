import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
const LOCAL_KEY = 'feedback-form-state';

// const updateForm = JSON.parse(localStorage.getItem(LOCAL_KEY));
const { email, message } = formEl.elements;

function inputData(e) {
    dataForm = { email: email.value, message: message.value };
    localStorage.setItem(LOCAL_KEY, JSON.stringify(dataForm));
  }

  
  function formSubmit(e) {
    e.preventDefault();
    console.log({ email: email.value, message: message.value });
   formEl.reset()}

    formEl.addEventListener('input', throttle(inputData, 500));
formEl.addEventListener('submit', formSubmit);