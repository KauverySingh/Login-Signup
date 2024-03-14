function newuser(form) {
	registercode = new Array("907362", "432176");/* 1st code for user, 2nd one for users code*/

	if(form.code.value == registercode[0]) {
		alert("The member site username is 'users' and password is 'ewbuccclub'")/* When you enter user code */
	}
	else if(form.code.value == registercode[1]) {
		alert("Username - 'users', password - 'ewbuccclub'")/* User username and password*/
	}
	else {
		alert("Incorrect code. Please re-try!")/* No such user */
	}
}
