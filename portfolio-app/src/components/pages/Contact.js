import React from 'react';
import useScript from '../../hooks/useScript';

export default function Contact() {
  useScript('../../js/form.js')
  
  return (
    <div>
      <div className='card'>
      <h1 className='card-header'>Contact Me</h1>
      <form className='card-body' action="#" method="post" id="contactform">
            <div className='form-group'><label for="fullname">Name:</label>
                <input className="form-control" type="text" id="fullname"></input></div>

            <div className='form-group'><label for="message">Message:</label>
                <textarea className="form-control" id="message"></textarea></div>

            <div className='form-group'><label for="email">Email:</label>
                <input className="form-control" type="email" id="email"></input></div>
              <br></br>
            <div className='form-group'><input className='btn btn-primary'type="button" id="submit" value="Click to submit"></input></div>

            <div className='form-group'><label className='form-text form-check-label' for="consent">I agree to receive emails via this email</label>
                <input style={{marginLeft: '10px'}} className="form-check-input" type="checkbox" id="consent"></input>
            </div>
            <div id="errors"></div>
        </form>
        <p className='card-footer'>Please leave your name, a message and email. I will do my best to get back to you as soon as possible.
        <br></br>
        My Information: headwallforest27@gmail.com 
         (603)502-8260 </p>
      </div>
      
    </div>
  );
  
}
