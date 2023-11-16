function validEmail(str) {
  //your JS code here.
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Check if the email is not empty and matches the regular expression
  return str !== '' && emailRegex.test(str);
}

// Do not change the code below.
const str = prompt("Enter an email address.");;
alert(validEmail(str));
