import decode from 'jwt-decode';

const initialState = {
  loggedIn: false,
  user: null,
};

class AuthService {
  getProfile() {
    return decode(this.getToken());
  }

  loggedIn() {
    const token = this.getToken();
    return token && !this.isTokenExpired(token) ? true : false;
  }

  isTokenExpired(token) {
    const decoded = decode(token);
    if (decoded.exp < Date.now() / 1000) {
      localStorage.removeItem('id_token');
      return true;
    }
    return false;
  }

  const;

  getToken() {
    return localStorage.getItem('id_token');
  }

  login(idToken) {
    localStorage.setItem('id_token', idToken);
    localStorage.setItem('likeId', decode(idToken));
    initialState.loggedIn = true;
    initialState.user = decode(idToken);
    window.location.assign('/me');
  }

  logout() {
    localStorage.removeItem('id_token');
    initialState.loggedIn = false;
    window.location.reload();
  }
}

export default new AuthService();
