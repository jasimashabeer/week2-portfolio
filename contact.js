//$(document).ready(function(){
    
  //  (function($) {
    //    "use strict";

    
   // jQuery.validator.addMethod('answercheck', function (value, element) {
     //   return this.optional(element) || /^\bcat\b$/.test(value)
    //}, "type the correct answer -_-");

    // validate contactForm form
    
   // $(function() {
      //  $('#contactForm').validate({
        //    rules: {
         //       name: {
           //         required: true,
             //       minlength: 2
               // },
                //subject: {
                   // required: true,
                  //  minlength: 4
              //  },
              //  number: {
               //     required: true,
               //     minlength: 5
              //  },
              //  email: {
               //     required: true,
             //       email: true
              //  },
            //    message: {
             //       required: true,
             //       minlength: 20
             //   }
          //  },
          //  messages: {
          //      name: {
              //      required: "come on, you have a name, don't you?",
             //       minlength: "your name must consist of at least 2 characters"
             //   },
           //     subject: {
            //        required: "come on, you have a subject, don't you?",
           //         minlength: "your subject must consist of at least 4 characters"
         //       },
         //       number: {
         //           required: "come on, you have a number, don't you?",
         //           minlength: "your Number must consist of at least 5 characters"
         //       },
         //       email: {
         //           required: "no email, no message"
         //       },
         //       message: {
         //           required: "um...yea, you have to write something to send this form.",
         //           minlength: "thats all? really?"
         //       }
         //   },
         //   submitHandler: function(form) {
         //       $(form).ajaxSubmit({
         //           type:"POST",
         //           data: $(form).serialize(),
         //           url:"contact_process.php",
         //           success: function() {
         //               $('#contactForm :input').attr('disabled', 'disabled');
         //               $('#contactForm').fadeTo( "slow", 1, function() {
         //                   $(this).find(':input').attr('disabled', 'disabled');
         //                   $(this).find('label').css('cursor','default');
         //                   $('#success').fadeIn()
         //                   $('.modal').modal('hide');
		 //               	$('#success').modal('show');
         //               })
         //           },
         //           error: function() {
         //               $('#contactForm').fadeTo( "slow", 1, function() {
         //                   $('#error').fadeIn()
         //                   $('.modal').modal('hide');
		 //               	$('#error').modal('show');
         //               })
         //           }
        //        })
      //      }
  //      })
  //  })







  

/*const form = document.getElementById('gform');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

/*form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});*/

 /* const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if(usernameValue === '') {
        setError(username, 'Username is required');
    } else {
        setSuccess(username);
    }

    if(emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }

    if(passwordValue === '') {
        setError(password, 'Password is required');
    } else if (passwordValue.length < 8 ) {
        setError(password, 'Password must be at least 8 character.')
    } else {
        setSuccess(password);
    }

    if(password2Value === '') {
        setError(password2, 'Please confirm your password');
    } else if (password2Value !== passwordValue) {
        setError(password2, "Passwords doesn't match");
    } else {
        setSuccess(password2);
    }

};






        
 //})(jQuery)
//}) 
 */
var nameError=document.getElementById('name-error');
var emailError=document.getElementById('email-error');
var messageError=document.getElementById('message-error');
var submitError=document.getElementById('submit-error');
var phoneError=document.getElementById('phone-error');
function validateName()
{
    var name=document.getElementById('contact-name').value;
    if(name.length==0){
        nameError.innerHTML="Name is required";
        return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML="Write full Name";
        return false;
    }
    nameError.innerHTML='valid';
    return true;
}
function validatePhone(){
    var phone=document.getElementById('contact-phone').value;
    if(phone.length==0){
        phoneError.innerHTML="Phone number is required";
        return false;
    }
    if(phone.length !==10){
        phoneError.innerHTML="Phone number should be 10 digits";
        return false;
    }
    if(!phone.match(/^[0-9]{10}$/)){
        phoneError.innerHTML="only digits";
        return false;
    }
    phoneError.innerHTML='valid';
    return true;
}
function validateEmail(){
    var email=document.getElementById('contact-email').value;
    if(email.length==0){
        phoneError.innerHTML="Email is required";
        return false;
    }
    if(!email.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
        emailError.innerHTML='Email invalid';
        return false;
    }
    emailError.innerHTML='valid';
    return true;
}
function validateMessage(){
    var message=document.getElementById('contact-message').value;
    var required=30;
    var left= required-message.length;
    if(left>0){
        messageError.innerHTML=left + "more characters required";
        return false;
    }
    messageError.innerHTML='valid'
    return true;
}
function validateForm(){
    if(!validateName() || !validateEmail() || !validatePhone() || !validateMessage()){
        
        submitError.innerHTML="Please fix error";
        return false;
    }

}