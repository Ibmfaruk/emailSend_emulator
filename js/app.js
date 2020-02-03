// Variables
const sendBtn = document.getElementById('sendBtn'),
      email = document.getElementById('email'),
      subject = document.getElementById('subject'),
      message = document.getElementById('message'),
      resetBtn = document.getElementById('resetBtn'),
      sendEmailForm = document.getElementById('email-form');
 





// event listeners

eventListeners();

function eventListeners(){
   // App Init
   document.addEventListener('DOMContentLoaded', appInit);

   // Validate the forms
   email.addEventListener('blur', validateField);
   subject.addEventListener('blur', validateField);
   message.addEventListener('blur', validateField);

   //send email and resets
   sendEmailForm.addEventListener("submit", sendEmail);
   resetBtn.addEventListener("click", resetForm);

}




// App Initialization
function appInit() {
    // disable the send button on load
    sendBtn.disabled = true;
}

function sendEmail(e) {
    e.preventDefault();
    // show the spinner
    const spinner = document.querySelector('#spinner');
    spinner.style.display = 'block';

    //show image
    const sendEmailImg = document.createElement('img');
     sendEmailImg.src = 'img/mail.gif';
     sendEmailImg.style.display = 'block';

    // hide spinner then show email sent
    setTimeout(function() {
        spinner.style.display = "none";

          // Show the image
          document.querySelector('#loaders').appendChild( sendEmailImg );

          // After 5 seconds, hide the image and reset the form
          setTimeout(function() {
               sendEmailForm.reset();
               sendEmailImg.remove();
          }, 3000); 

    }, 3000 ); // 3 seconds
}

function validateField() {
    

    validateLength(this)

    // validates email
    if(this.type === "email") {
        validateEmail(this);
    }
    // both will return errors,check if there are any errors
    const errors = document.querySelectorAll(".error");

    // check that the inputs are not empty
    if(email.value !== "" && subject.value !== "" && message.value !== "") {
        if(errors.length === 0) {
            sendBtn.disabled = false;
        }
    }
}
// Validate the Length of the fields
function validateLength(field) {
    if(field.value.length > 0 ) {
         field.style.borderBottomColor = 'green';
         field.classList.remove('error');
    } else {
         field.style.borderBottomColor = 'red';
         field.classList.add('error');
    }
} 

function validateEmail(field) {
    let  emailText = field.value;
    // check if email contains @ indexOf is a very good method ibm no forget
    if((emailText.indexOf('@') !== -1) && emailText.indexOf('.com') !== -1) {
            field.style.borderBottomColor = 'green';
            field.classList.remove('error');
       } else {
            field.style.borderBottomColor = 'red';
            field.classList.add('error');
       }
    
}
// Reset the form
function resetForm(e) {
    e.preventDefault();

   sendEmailForm.reset();
    // disable the send button on load
    sendBtn.disabled = true;

}