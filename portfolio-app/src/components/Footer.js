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
      <div class="col-md-6 mt-md-0 mt-3">

        <h5 class="text-uppercase">Footer Content</h5>
        <p>Here you can use rows and columns to organize your footer content.</p>
      </div>
      <hr class="clearfix w-100 d-md-none pb-3">
        </hr>
      <div class="col-md-1 mb-md-0 mb-2">

   
        <h5 class="text-uppercase">Links</h5>

        <ul class="list-unstyled">
          <li>
            <a href="#!">Link 1</a>
          </li>
        </ul>
      </div>
      <div class="col-md-1 mb-md-0 mb-2">
        <h5 class="text-uppercase">Links</h5>
        <ul class="list-unstyled">
          <li>
            <a href="#!">Link 1</a>
          </li>
        </ul>
      </div>

      <div class="col-md-1 mb-md-0 mb-2">
        <h5 class="text-uppercase">Links</h5>

        <ul class="list-unstyled">
          <li>
            <a href="#!">Link 1</a>
          </li>
        </ul>

      </div>

    </div>

  </div>

  <div class="footer-copyright text-center py-3">© 2022 Copyright Ryan Jewell</div>
</footer>

    )};
    
    export default Footer;