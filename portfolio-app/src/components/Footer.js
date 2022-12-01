import React from 'react';

const footerStyle = {
    clear: 'both',
    marginTop: '80%',
    marginBottom: '0%',
    position: 'sticky',
    display: "none"
};

function Footer() {
    
    return (
    
<footer style={{footerStyle}} class="page-footer font-small blue pt-4">
  <div class="container-fluid text-center text-md-left">
    <div class="row">
      <div class="col-md-4 mt-md-0 mt-3">

        
      </div>
      <hr class="clearfix w-100 d-md-none pb-3">
        </hr>
      <div class="col-md-1 mb-md-0 mb-2">
        <ul class="list-unstyled">
          <li>
            <a href="https://github.com/Rjewell859"><img className='footer-icon' src={require('../img/design/github.png')} alt='github icon'></img></a>
          </li>
        </ul>
      </div>
      <div class="col-md-1 mb-md-0 mb-2">
        <ul class="list-unstyled">
          <li>
            <a href="https://stackoverflow.com/users/19155658/ryan-jewell"><img className='footer-icon' src={require('../img/design/stackicon.png')} alt='github icon'></img></a>
          </li>
        </ul>
      </div>

      <div class="col-md-1 mb-md-0 mb-2">

        <ul class="list-unstyled">
          <li>
            <a href="https://www.linkedin.com/in/ryan-jewell-29336023b/"><img className='footer-icon' src={require('../img/design/linkedin.png')} alt='github icon'></img></a>
          </li>
          <li>

          </li>
        </ul>

      </div>

    </div>

  </div>

  <div class="float-right footer-copyright text-center py-3 italic">© 2022 Copyright, Ryan Jewell</div>
</footer>

    )};
    
    export default Footer;