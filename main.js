
const loginInput = document.querySelector('#login');
const passwordInput = document.querySelector('#password');
const sUButton = document.querySelector('#strenghtenButton');
const sUButton2 = document.querySelector('#strenghtenButton2');
const sUButton3 = document.querySelector('#strenghtenButton3');
const signUpButton =document.querySelector('#signUpButton');

signUpButton.setAttribute('disabled','');
sUButton.setAttribute('hidden','');
sUButton2.setAttribute('hidden','');
sUButton3.setAttribute('hidden','');

function checkPassword(password){

  var upperCase = upperCaseCheck(password);
  var digit = digitCheck(password);
  if(password.length >= 12 
    && upperCase === true
    && digit === true){
      sUButton.removeAttribute('hidden','');
      sUButton2.removeAttribute('hidden','');
      sUButton3.removeAttribute('hidden','');
  }
  else if(password.length >= 8 
    && password.length <12
    && upperCase === true){

      sUButton.removeAttribute('hidden','');
      sUButton2.removeAttribute('hidden','');
  }
  else{
    
    sUButton.removeAttribute('hidden',''); 
  }
}
function upperCaseCheck (pass){
  return /[a-z]/.test(pass) && /[A-Z]/.test(pass);
}

function digitCheck(pass){
  return /[1-9]/.test(pass);
}

if(loginInput.value.length>0 && passwordInput.value.length>0){
  checkPassword(passwordInput.value);
  signUpButton.removeAttribute('disabled','');
}

