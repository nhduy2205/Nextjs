import Navbar from '../components/Navbar';
import '../scss/style.scss';
import Link from 'next/link';
const Login = () => (
  <div>
    <Navbar />
    <section className='login'>
      <div className='login-content'>
        <form action>
          <div className='form-group'>
            <div className='login-title'>Sign in</div>
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
            <label htmlFor='exampleDropdownFormPassword2'>Password</label>
            <input
              type='password'
              className='form-control'
              id='exampleDropdownFormPassword2'
              placeholder='Password'
            />
          </div>
          <div className='form-group'>
            <div className='form-check'>
              <input
                type='checkbox'
                className='form-check-input'
                id='dropdownCheck2'
              />
              <label className='form-check-label' htmlFor='dropdownCheck2'>
                Remember me
              </label>
            </div>
          </div>
          <div className='row btn-submit'>
            <div className='col-12 col-lg-6'>
              <button type='submit' className='btn btn-success'>
                Sign in
              </button>
            </div>
            <div className='col-12 col-lg-6'>
              <Link href='./register'>
                <a className='btn btn-primary'>Register</a>
              </Link>
            </div>
          </div>
        </form>
        <div className='dropdown-divider' />
        <a className='dropdown-item' href='#'>
          New around here? Sign up
        </a>
        <a className='dropdown-item' href='#'>
          Forgot password?
        </a>
      </div>
    </section>
  </div>
);

export default Login;
