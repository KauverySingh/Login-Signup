function password(form) {
	username = new Array("user1", "user2", "users");

	if(form.userid.value == username[0]) {
		alert("User passwords cannot be reset.")/* User */
	}
	else if(form.userid.value == username[1]) {
		alert("User passwords cannot be reset.")/* User */
	}
	else if(form.userid.value == username[2]) {
		location.replace('find-account.html')/* Users reset password */
	}
	else {
		alert("No such user found")
	}
}
