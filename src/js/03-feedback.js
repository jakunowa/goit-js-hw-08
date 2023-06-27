import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
const emailEl = document.querySelector('input[type="email"]');
const messageEl = document.querySelector('input[name="message"]');
const btnEl=document.querySelector('button[type="submit"]')
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
    e.currentTarget.reset()}

    formEl.addEventListener('input', throttle(inputData, 500));
formEl.addEventListener('submit', formSubmit);