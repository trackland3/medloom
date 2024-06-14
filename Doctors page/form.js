document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('myform').addEventListener('submit', function (event) {
    
        event.preventDefault();

        
        document.getElementById('errorMessages').textContent = '';

       
        var patientName = document.getElementsByName('patientName')[0].value;
        var patientEmail = document.getElementsByName('patientEmail')[0].value;
        var contactNumber = document.getElementsByName('contactNumber')[0].value;
        var doctorName = document.getElementsByName('doctorName')[0].value;
        var hospital = document.getElementsByName('hospital')[0].value;

        var errors = [];

        if (patientName === '') {
            errors.push('Patient Name is required.');
        }


        if (patientEmail === '') {
            errors.push('Patient Email is required.');
        } else {
            
            var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
            if (!emailPattern.test(patientEmail)) {
                errors.push('Invalid email format.');
            }
        }


        if (contactNumber === '') {
            errors.push('Contact Number is required.');
        } else if (isNaN(contactNumber)) {
            errors.push('Contact Number must be a valid number.');
        }

        if (doctorName === '') {
            errors.push('Doctor Name is required.');
        }

        if (hospital === '') {
            errors.push('Hospital selection is required.');
        }

        if (errors.length > 0) {
            document.getElementById('errorMessages').textContent = errors.join(' ');
        } else {
            alert('Form submitted successfully!');

        }
    });
});
