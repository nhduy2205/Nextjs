import Link from 'next/link';
const Navbar = () => (
  <nav className='navbar navbar-expand-lg navbar-light bg-light'>
    <a className='navbar-brand' href='#'>
      Navbar
    </a>
    <button
      className='navbar-toggler'
      type='button'
      data-toggle='collapse'
      data-target='#navbarNavAltMarkup'
      aria-controls='navbarNavAltMarkup'
      aria-expanded='false'
      aria-label='Toggle navigation'
    >
      <span className='navbar-toggler-icon' />
    </button>
    <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
      <div className='navbar-nav'>
        <Link href='/'>
          <a className='nav-item nav-link active' href='#'>
            Home <span className='sr-only'>(current)</span>
          </a>
        </Link>
        <Link href='./login'>
          <a className='nav-item nav-link' href='#'>
            Login
          </a>
        </Link>
        <Link href='/register'>
          <a className='nav-item nav-link' href='register.html'>
            Rigister
          </a>
        </Link>
      </div>
    </div>
  </nav>
);

export default Navbar;
