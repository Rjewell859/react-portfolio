var fullName = document.getElementById('fullname');
var message = document.getElementById('message');
var email = document.getElementById('email');
var form = document.getElementById('contactform');
var checkbox = document.getElementById('consent');
var errors = document.getElementById('errors');

fullName.addEventListener('focus', function() {
    if (this.value == '') {
        this.value='Please type your full name';
    }
    });
message.addEventListener('focus', function() {
    if (fullName.value != '' & fullName.value != 'Please type your full name') {
        this.value = 'Hello ' + fullName.value + '!';
    } else {
        this.value = 'Enter your full name first';
    }
});
form.addEventListener('submit', function(e){
    var stopSubmit = false;
    
    if (!checkbox.checked) {
        errors.innerHTML = '<p>Consent to receiving emails!</p>';
        stopSubmit = true;
    }
    
    if (fullName.value == '') {
        errors.innerHTML = '<p>Enter your name!</p>';
        stopSubmit = true;
    }
    
    if (stopSubmit) {
        e.preventDefault();
    }
});

