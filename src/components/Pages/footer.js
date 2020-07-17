import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const Footer = () => {
  return (
    <MDBFooter className="font-small pt-4 mt-4" style = {{backgroundColor: '#2E2E2E'}}>
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">Let's talk</h5>
            <p>     
                Wanna get in touch or talk about a project? Feel free to contact me via email at 
                mperez6109@gmail.com or drop a line in the form at the contact page.
            </p>
          </MDBCol>
          <MDBCol md="6">
            <h5 className="title">Social Media</h5>
            <ul>
              <li className="list-unstyled">
                <a href="https://www.linkedin.com/in/martin-perez-programmer/" class="btn-floating btn-lg btn-li" type="button" role="button"><i class="fab fa-linkedin blue-text"></i></a>
                <a href="https://stackexchange.com/users/17913153/martin" class="btn-floating btn-lg btn-so" type="button" role="button"><i class="fab fa-stack-overflow blue-text"></i></a>
                <a href="https://github.com/mperez6109" class="btn-floating btn-lg btn-git" type="button" role="button"><i class="fab fa-github blue-text"></i></a>
                <a href="https://www.facebook.com/mperez6109" class="btn-floating btn-lg btn-fb" type="button" role="button"><i class="fab fa-facebook-f blue-text"></i></a>
                <a href="https://appdeveloperweb.com/contact" class="btn-floating btn-lg btn-email" type="button" role="button"><i class="fas fa-envelope blue-text"></i></a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: Martin's Portfolio.
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}
export default Footer;
