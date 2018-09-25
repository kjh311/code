function validateNameForm() {

	var nameFormWrapper = document.getElementById("name-form-div");
	var emailWrapper = document.getElementById("email-form-div");

	nameFormWrapper.classList.remove("d-block"); 
    nameFormWrapper.classList.add("d-none"); 
    emailWrapper.classList.remove("d-none"); 
    emailWrapper.classList.add("d-block"); 

}