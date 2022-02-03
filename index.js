const isAuthenticated = () => {
    if (typeof window == undefined) {
        window.location.replace("/login.html");
      return false;
    }
    if (localStorage.getItem('auth-data')) {
      return JSON.parse(localStorage.getItem('auth-data'));
    }
    window.location.replace("/login.html");
    return false;
  };

  isAuthenticated();