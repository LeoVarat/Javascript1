// problem: 1. Längd text
// 2. ålder under 18.


// För att greppa information

const form = document.getElementById('form');
const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const dob = document.getElementById('dob');
const postnumber = document.getElementById ('postnumber')
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

// Eventlsitener
form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});

function checkInputs() {
	// trim tar bort mellanslag
	const firstnameValue = firstname.value.trim();
    const lastnameValue = lastname.value.trim();
    const dobValue = dob.value.trim();
    const postnumberValue = postnumber.value.trim();
	const emailValue = email.value.trim();
	const passwordValue = password.value.trim();
	const password2Value = password2.value.trim();

    //Valideringar
        //förnamn
        function validLenght (value.minvaluse.2
	if(firstnameValue === '') {
		setErrorFor(firstname, 'Förnamn måste vara ifyllt');
	} else if (firstname.value.lenght > 2 ) {
		setErrorFor(firstname, 'Förnamn måste innehålla minst 2 bokstäver');
	} else {
		setSuccessFor(firstname);
	}

        //Efternamn
    if(lastnameValue === '') {
		setErrorFor(lastname, 'Efternamn måste vara ifyllt');
	}  else if (lastnameValue < 2) {
    setErrorFor(lastname, 'Efternamn måste innehålla minst 2 bokstäver');
    } else {
		setSuccessFor(lastname);
	}

        //Födelsedatum
    if(dobValue === '') {
		setErrorFor(dob, 'Födelsedatum måste vara ifyllt');
	} else {
		setSuccessFor(dob);
	}


        //postnr
        if(postnumberValue === '') {
            setErrorFor(postnumber, 'Postnummer måste vara ifyllt.');
        } else if (postnumberValue < 10000 ) {
            setErrorFor(postnumber, 'Postnummer är för kort, 5 siffor!');
        } else if (postnumberValue > 99999 ) {
            setErrorFor(postnumber, 'Postnummer är för långt, 5 siffor!');
        } else {
            setSuccessFor(postnumber);
        }
    


        //Mail
	if(emailValue === '') {
		setErrorFor(email, 'Email måste vara ifyllt');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Ingen giltig mailadress');
	} else {
		setSuccessFor(email);
	}
    	
  

        //Lösenord
	if(passwordValue === '') {
		setErrorFor(password, 'Lösenord måste vara ifyllt');
	} else {
		setSuccessFor(password);
	}
	
    // Upprepning av lösenord
	if(password2Value === '') {
		setErrorFor(password2, 'Lösenord måste upprepas');
	} else if(passwordValue !== password2Value) {
		setErrorFor(password2, 'Lösenorder stämmer inte överens med tidigare, slarvigt!');
	} else{
		setSuccessFor(password2);
	}
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}




function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
    }

