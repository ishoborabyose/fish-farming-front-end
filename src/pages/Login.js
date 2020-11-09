import React from 'react';
import './Register.css'
import Dashboard from './Dashboard'

const validEmailRegex = RegExp(
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);
const validateForm = errors => {
  let valid = true;
  Object.values(errors).forEach(val => val.length > 0 && (valid = false));
  return valid;
};

export default class login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: null,
      email: null,
      password: null,
      errors: {
        fullName: '',
        email: '',
        password: '',
      }
    };
  }

  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors;

    switch (name) {
      case 'fullName': 
        errors.fullName = 
          value.length < 5
            ? 'Full Name must be at least 5 characters long!'
            : '';
        break;
      case 'email': 
        errors.email = 
          validEmailRegex.test(value)
            ? ''
            : 'Email is not valid!';
        break;
      case 'password': 
        errors.password = 
          value.length < 8
            ? 'Password must be at least 8 characters long!'
            : '';
        break;
      default:
        break;
    }

    this.setState({errors, [name]: value});
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if(validateForm(this.state.errors)) {
      console.info('Valid Form')
    }else{
      console.error('Invalid Form')
    }
  }

  render() {
    const {errors} = this.state;
    return (
      <>

<div class="container">
  <form action="/action_page.php">
    <div class="row">
    
    
      <div class="col">
        <a href="https://www.facebook.com/" class="fb btn">
          <i class="fa fa-facebook fa-fw"></i>
           Login with Facebook
         </a>
        <a href="https://twitter.com/" class="twitter btn">
          <i class="fa fa-twitter fa-fw"></i> Login with Twitter
        </a>
        <a href="https://gmail.com/" class="google btn"><i class="fa fa-google fa-fw">
          </i> Login with Google
        </a>

        <a href="https://instagram.com/" class="instagram btn"><i class="fa fa-instagram fa-fw">
          </i> Login with Instagram
        </a>
      </div>

      <div class="col">
      
        
      <div className='form-wrapper'>

<form onSubmit={this.handleSubmit} noValidate>
<div className='fullName'>
<label htmlFor="fullName">User Name</label>
<input type='text' name='fullName' onChange={this.handleChange} noValidate />
{errors.fullName.length > 0 && 
<span className='error'>{errors.fullName}</span>}
</div>
<div className='email'>
<label htmlFor="email">Email</label>
<input type='email' name='email' onChange={this.handleChange} noValidate />
{errors.email.length > 0 && 
<span className='error'>{errors.email}</span>}
</div>
<div className='password'>
<label htmlFor="password">Password</label>
<input type='password' name='password' onChange={this.handleChange} noValidate />
{errors.password.length > 0 && 
<span className='error'>{errors.password}</span>}
</div>
<div className='submit'>

{/* <a href="/Dashboard" class="btn btn-primary"><i >
          </i> Login
        </a> */}
<button class='btn btn-primary' onClick={Dashboard}>Login</button>


</div>
</form>
</div>



      </div>
      
    </div>
  </form>
</div>

<div class="container" style={{backgroundColor:'#0000ff'}}>
  <div class="row">
    <div class="col">
      <a href="/Signup" style={{color:'white'}}class="btn">Sign up</a>
    </div>
    <div class="col">
      <a href="#" style={{color:'white'}} class="btn">Forgot password?</a>
    </div>
  </div>
</div>

</>
      
    );
  }
}