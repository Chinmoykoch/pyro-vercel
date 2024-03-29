import { ReactElement, FormEventHandler } from 'react';

import './registration.scss';

function Registration(): ReactElement {
  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    alert('Thank you for registration!');
    alert('See you soon!');
  };

  return (
    <>
      <div className="main-container">
        <div className="poster">
          <img src="pyro_logo.png" alt="Pyro logo" />
        </div>
        <div className="register-container">
          <div className="register-form">
            <h2 className="head">Registration form</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="fullName">Full Name:</label>
                <input type="text" id="fullName" name="fullName" required />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />
              </div>

              <div className="form-group">
                <label htmlFor="phoneNumber">Phone Number:</label>
                <input type="tel" id="phoneNumber" name="phoneNumber" required />
              </div>

              <div className="form-group">
                <label htmlFor="college">College/University:</label>
                <input type="text" id="college" name="college" required />
              </div>

              <div className="form-group">
                <label htmlFor="address">Address:</label>
                <input type="text" id="address" name="address" required />
              </div>

              <button className="reg-button" type="submit">
                Register
              </button>
            </form>
          </div>
          <br />
        </div>
      </div>
    </>
  );
}

export default Registration;







