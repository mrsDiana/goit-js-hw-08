import throttle from 'lodash.throttle';
const refs = {
    form: document.querySelector('.feedback-form'),
    textarea: document.querySelector('.feedback-form textarea'),
    inputTxt: document.querySelector('.feedback-form input')
};

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onTextareaInput, 500));
refs.inputTxt.setAttribute("required", 'true');
refs.textarea.setAttribute("required", 'true');

populateTextInput ();

function onFormSubmit (e) {
e.preventDefault();
e.currentTarget.reset();
localStorage.removeItem('feedback-form-state');
}


function onTextareaInput(e){
    const {elements: {email, message}} = e.target.form;
    const messageForm = {email: email.value , message: message.value};
    localStorage.setItem('feedback-form-state', JSON.stringify(messageForm));
}

function populateTextInput (){
    const saveMessage = localStorage.getItem('feedback-form-state');
    
    if (saveMessage) {
    const saveMessageJSON = JSON.parse(saveMessage);
    console.log(saveMessageJSON);
    refs.textarea.value = saveMessageJSON.message;
    refs.inputTxt.value = saveMessageJSON.email;
    }
}