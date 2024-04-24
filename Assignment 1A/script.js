//let form = document.querySelector('form');

// form.addEventListener('submit', (e) => {
//	e.preventDefault();

//	let name = document.getElementById('name').value;
// 	let email = document.getElementById('email').value;
// 	let password = document.getElementById('password').value;
// 	let dob = document.getElementById('dob').value;
// 	let phone = document.getElementById('phone').value;


// 	if (name === '' || email === '' || password === '' || dob === '' || phone === '') {
// 		alert('All fields are required!');
		
// 	}


// 	if (!(/^[a-zA-Z\s]+$/).test(name)) {
// 		alert('Name should only contain alphabets!');
		
// 	}

// 	if (dob > 2004) {
// 		alert('DOB should be less than or equal to 2004!');
	
// 	}

// 	if (!(/^\d{10}$/).test(phone)) {
// 		alert('Phone number should only contain 10 digits!');
		
// 	}
// });
form.addEventListener('submit',(e)=>{
	e.preventDefault();
	let  formData = {
		 ids : document.getElementById('id').value,
		 username : document.getElementById('username').value,
		 pass : document.getElementById('password').value,
		 mail : document.getElementById('email').value,
		 dob : document.getElementById('dob').value,
		 gender : document.getElementById('gender').value,
		 address : document.getElementById('address').value,
		 city : document.getElementById('city').value,
		 pincode : document.getElementById('pincode').value,
		 hobbies :  document.querySelectorAll('input[name ="hobbies[]"]:checked')	 
	}
	if ( mail === '' || pass === '' || dob === '' || city === '') {
		alert('All fields are required!');
			
	 }

	 if (dob > 2004) {
				alert('DOB should be less than or equal to 2004!');
			
		 	}
	console.log(formData);
});

