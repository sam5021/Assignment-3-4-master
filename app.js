function validateForm() {
  let email1 = document.forms["loginForm"]["email"].value;
  let password1 = document.forms["loginForm"]["password"].value;

  const reg1 =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const reg2 = /[!#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    const reg3 = /\b[A-Z]{1,}\b/g
    const reg4 = new RegExp('[0-9]');
  if (!reg1.test(email1)) {
    
    document.getElementById("exampleInputEmail1").classList.add("is-invalid");
    document.getElementById("emailerror").classList.remove("displayerror");
    // alert("email must be valid");
  }
  else
  {
    document.getElementById("exampleInputEmail1").classList.add("is-valid");
    document.getElementById("emailerror").classList.add("displayerror");
  }
  if(reg2.test(password1) || reg3.test(password1) || !reg4.test(password1))
  {
    document.getElementById("exampleInputPassword1").classList.add("is-invalid");
    document.getElementById("passworderror").classList.remove("displayerror");
  }
  else{
    document.getElementById("exampleInputPassword1").classList.add("is-valid");
    document.getElementById("passworderror").classList.add("displayerror");
  }
  

  return false
}
