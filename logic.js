/*   
This file has the javascript code, which allows a customer to select an option, and register for the class by inputting their First name/Last name/phone number. A message then displayed on the screen confirming their confirmation and the specific class it's done for.
*/


function book(whichClass) {  //  Assigning DOM elements to variables
	let bookingForm = document.getElementById('bookingForm');
	let infoText = document.getElementById('infoText');
	let className = document.getElementById('className');
	let classTime = document.getElementById('classTime');
	let classPrice = document.getElementById('classPrice');
	let classForm = document.getElementById('classForm');

	//Makes the form visible on the page
	bookingForm.style.display = 'inline-block';
	infoText.style.display = 'block';
	classForm.style.display = 'block';
	classBooked.style.display = 'none';
	classForm.reset();
	
	//This tells the user which class is about to be booked
	className.innerText = document.getElementById('classesTable').rows[whichClass + 1].cells[0].innerText;
	classTime.innerText = document.getElementById('classesTable').rows[whichClass + 1].cells[1].innerText;
	classPrice.innerText = document.getElementById('classesTable').rows[whichClass + 1].cells[2].innerText;
}

function formsubmit() {  //this pre-sets varriable that will be used in the form validation
	let bookingForm = document.getElementById('bookingForm');
	let infoText = document.getElementById('infoText');
	let classForm = document.getElementById('classForm');
	let isNameValid = false;
	let isPhValid = false;
	let isValid = false;
	 
	//This part makes sure the name field is not empty
	if (document.forms["classForm"]["name"].value) {
		isNameValid = true;
	} else {
		isNameValid = false;
		alert("Invalid name!");
	}
	
	//This makes sure the phone number is valid, based on the selected country
	if (document.forms["classForm"]["country"].value == 'ie') {
		if (document.forms["classForm"]["phnum"].value.match(/^0?8[35679] ?\d{3} ?\d{4}$/)) {
			isPhValid = true;
		} else {
			isPhValid = false;
			alert("Invalid phone number!");
		}
	} else {
		if (document.forms["classForm"]["phnum"].value.match(/^0?7[1-9]{3}[ -]?\d{3}[ -]?\d{3}$/)) {
			isPhValid = true;
		} else {
			isPhValid = false;
			alert("Invalid phone number!");
		}
	}
	
	//Sets 'isValid' to true if the phone number & name are valid
	isValid = isNameValid && isPhValid;
	
	if (isValid) {  //Makes the form hidden and tells the user that the class is now booked, if the form is valid
		document.getElementById('usersName').innerText = document.forms["classForm"]["name"].value.split(' ')[0];
		infoText.style.display = 'none';
		classForm.style.display = 'none';
		classBooked.style.display = 'block';
		
		classForm.reset();
	}
}