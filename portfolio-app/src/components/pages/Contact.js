import React, { useState } from 'react';

import { checkMessage, validateEmail } from '../../utils/helpers'

function Form() {
  // Create state variables for the fields in the form
  // We are also setting their initial values to an empty string

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [consent, setConsent] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, name, message, or consent
    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'name') {
      setName(inputValue);
    } else if (inputType === 'consent')
      setConsent(e.target.checked); 
    else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // First we check to see if the email is not valid or if the name is empty. If so we set an error message to be displayed on the page.
    if (!validateEmail(email)) {
      setSuccessMessage('');
      setErrorMessage(`This email is invalid.`);
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
      // Then we check to see if the password is not valid. If so, we set an error message regarding the password.
    }
    else if (!name){
      setSuccessMessage('');
      setErrorMessage('Please enter your name.')
      return;
    }
    else if (!checkMessage(message)) {
      setSuccessMessage('');
      setErrorMessage(
        `Please add more than 30 characters to your message.`
      );
      return;
    }
    if (!consent) {
      setSuccessMessage('');
      setErrorMessage(`Please consent to receiving emails before submitting.`)
      return;
      
    }
    else {
      setErrorMessage('')
      setSuccessMessage(`You're message has been submitted, ${name}.`);
    
  }

    // If everything goes according to plan, we want to clear out the input after a successful registration.
    setName('');
    setMessage('');
    setConsent('');
    setEmail('');
  };

  return (
    <div className='card'>
      <h1 className='card-header'>Contact Me</h1>
      <form className='card-body' action="#" method="post" id="contactform">
            <div className='form-group'><label htmlFor="fullname">Name:</label>
                <input 
                value={name} 
                onChange={handleInputChange}
                className="form-control" 
                type="text" 
                id="fullname"
                name="name"
                ></input></div>

            <div className='form-group'><label htmlFor="message">Message:</label>
                <textarea value={message} onChange={handleInputChange} name="message" className="form-control" id="message"></textarea></div>

            <div className='form-group'><label htmlFor="email">Email:</label>
                <input value={email} name="email" onChange={handleInputChange} className="form-control" type="email" id="email"></input></div>
              <br></br>
            <div className='form-group'><input onClick={handleFormSubmit} className='btn btn-primary'type="button" id="submit" value="Click to submit"></input></div>

            <div className='form-group'><label className='form-text form-check-label' htmlFor="check">I agree to receive emails via this email</label>
                <input style={{marginLeft: '10px'}} className="form-check-input" onChange={handleInputChange} type="checkbox" value={consent} name='consent' id="consent"></input>
            </div>
            {errorMessage && (
        <div>
          <p id='errors' className="alert alert-danger">{errorMessage}</p>
        </div>
      )}
      {successMessage && (
        <div>
          <p id='success' className="alert alert-success">{successMessage}</p>
        </div>
      )}
        </form>
        <p className='card-footer'>Please leave your name, a message and email. I will do my best to get back to you as soon as possible.
        <br></br>
        My Information: headwallforest27@gmail.com 
         (603)502-8260 </p>
      </div>
      
  )

   
}

export default Form;
// export default function Contact() {
  
//   return (
    

//     <div>
//       <Helmet>
//         <script
//           src="../../js/form.js"
//           type='text/javascript'
//         >{console.log("Fix me")}</script>
//       </Helmet>
      
    
//   );
  
  
// }
