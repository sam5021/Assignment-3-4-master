function validateForm() {
  let email1 = document.forms["loginForm"]["email"].value;
  let password1 = document.forms["loginForm"]["password"].value;

  const reg1 =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const reg2 = /[!#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
  const reg3 = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$");
  const reg4 = new RegExp("[0-9]");
  if (!reg1.test(email1)) {
    document.getElementById("exampleInputEmail1").classList.add("is-invalid");
    document.getElementById("emailerror").classList.remove("displayerror");
    return false;
    // alert("email must be valid");
  } else {
    document.getElementById("exampleInputEmail1").classList.add("is-valid");
    document.getElementById("emailerror").classList.add("displayerror");
  }
  if (reg2.test(password1) || reg3.test(password1) || !reg4.test(password1)) {
    document
      .getElementById("exampleInputPassword1")
      .classList.add("is-invalid");
    document.getElementById("passworderror").classList.remove("displayerror");
    return false;
  } else {
    document.getElementById("exampleInputPassword1").classList.add("is-valid");
    document.getElementById("passworderror").classList.add("displayerror");
  }
  if (email1 === "test1@gmail.com" && password1 === "SmartServTest@123") {
    if (typeof window !== undefined) {
      const data = { email1, password1 };
      localStorage.setItem("auth-data", JSON.stringify(data));
    }
    window.location.replace("/index.html");
    return true;
  } else {
    alert("Incorrect Email and Incorrect Password");
    return false;
  }

}



const isAuthenticated = () => {
  if (typeof window == undefined) {
    return false;
  }
  if (localStorage.getItem('auth-data')) {
    window.location.replace("/index.html");
  }
  return false;
};

isAuthenticated();