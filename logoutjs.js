function logout() {
  if (typeof window !== undefined) {
    localStorage.removeItem("auth-data");
    window.location.replace("/login.html");
  }
}
