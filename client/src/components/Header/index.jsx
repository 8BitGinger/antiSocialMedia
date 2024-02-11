import { Link } from 'react-router-dom';

import Auth from '../../utils/auth';

import logo from '../../assets/tinyLogo - no back.png';

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <header className="bg-info text-dark mb-4 py-3 display-flex align-center">
      <div className="container flex-column justify-space-between-lg justify-center align-center text-center">
        <Link className="text-dark row menu" to="/">
          <img src={logo} alt="news" className="logo-image" />

          <h1 className="m-0 page-title" style={{ fontSize: '3rem' }}>
            ocial Eyes
          </h1>
        </Link>
        <p className="m-0" style={{ fontSize: '1.25rem', fontWeight: '700' }}>
          The AntiSocial Media
        </p>
        <div>
          {Auth.loggedIn() ? (
            <>
              <Link className="btn btn-lg btn-primary primary m-2" to="/me">
                View My Profile
              </Link>
              <button
                className="btn btn-lg secondary btn-light m-2"
                onClick={logout}
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link className="btn btn-lg btn-primary m-2" to="/login">
                Login
              </Link>
              <Link className="btn btn-lg btn-light m-2" to="/signup">
                Signup
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;