import Navbar from '../components/Navbar';
import '../scss/style.scss';
import Link from 'next/link';
const Register = () => (
  <div>
    <Navbar />
    <section className='login'>
      <div className='login-content'>
        <form action>
          <div className='form-group'>
            <div className='login-title'>Register</div>
          </div>
          <div className='form-group'>
            <label htmlFor='exampleDropdownFormEmail2'>Email address</label>
            <input
              type='email'
              className='form-control'
              id='exampleDropdownFormEmail2'
              placeholder='email@example.com'
            />
          </div>
          <div className='form-group'>
            <label htmlFor='exampleDropdownFormEmail2'>User name</label>
            <input
              type='text'
              className='form-control'
              id='exampleDropdownFormEmail2'
              placeholder='Username'
            />
          </div>
          <div className='form-group'>
            <label htmlFor='exampleDropdownFormPassword2'>Password</label>
            <input
              type='password'
              className='form-control'
              id='exampleDropdownFormPassword2'
              placeholder='Password'
            />
          </div>
          <div className='form-group'>
            <label htmlFor='exampleDropdownFormPassword2'>
              Confirm password
            </label>
            <input
              type='password'
              className='form-control'
              id='exampleDropdownFormPassword2'
              placeholder='Confirm password'
            />
          </div>
          <div className='row btn-submit'>
            <div className='col-12 col-lg-6'>
              <button type='submit' className='btn btn-primary'>
                Register
              </button>
            </div>
            <div className='col-12 col-lg-6'>
              <Link href='/login'>
                <a className='btn btn-danger'>Back</a>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </section>
  </div>
);

export default Register;
