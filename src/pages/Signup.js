import React, { useState } from "react";
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import "./login.css";


function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirst] = useState("");
  const [secondname, setSecond] = useState("");
  const [location, setLocation] = useState("");
  
 

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div class='class="col-sm-8'>
      <div className="login">
        <form onSubmit={handleSubmit}>
          <h5>RARICO'S REGISTRATION FORM</h5>

          <FormGroup controlId="email" bsSize="large">
            <FormLabel>First-Name</FormLabel>
            <FormControl
              autoFocus
              type="text"
              value={firstname}
              onChange={(e) => setFirst(e.target.value)}
            />
          </FormGroup>

          <FormGroup controlId="email" bsSize="large">
            <FormLabel>Second-Name</FormLabel>
            <FormControl
              autoFocus
              type="text"
              value={secondname}
              onChange={(e) => setSecond(e.target.value)}
            />
          </FormGroup>

          <FormGroup controlId="email" bsSize="large">
            <FormLabel>Email</FormLabel>
            <FormControl
              autoFocus
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormGroup>

          <FormGroup controlId="email" bsSize="large">
            <FormLabel>Site-Location</FormLabel>
            <FormControl
              autoFocus
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <FormLabel>Password</FormLabel>
            <FormControl
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
            />
          </FormGroup>
          <Button
            block
            bsSize="large"
            disabled={!validateForm()}
            type="submit"
            style={{ backgroundColor: "#060b26" }}
          >
            {" "}
            <a
              href="/Dashboard"
              style={{ color: "white", textDecoration: "none" }}
            >
              Register
            </a>
          </Button>
        </form>
      </div>
    </div>
  );
}
export default Signup;
