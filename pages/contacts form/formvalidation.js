 $("#formvalidation").validate({

    rules: {
        name: {
                required: true,
                minlength: 2
            },
        email: {
                required: true,
                email: true
            },
        contact: {
                required: true,
                digits: true,
                minlength: 10,
                maxlength: 10
            },
        message: {
                required: true
            },


    },
    messages: {
        name: {
                required: "*Please enter your name",
                minlength: "*Your name must consist of at least 2 characters"
            },
        email: {
                required: "*Please enter your email",
                email: "*Please enter a valid email address"
            },
        contact: {
                required: "*Please enter your contact number",
                digits: "*Please enter a valid contact number",
                minlength: "*Your contact number must consist of at least 10 digits",
                maxlength: "*Your contact number must consist of at most 10 digits"
            },
        message: {
                required: "*Please enter your message"
            },
    },


  submitHandler: function(form) {
    form.submit();
  }
 });