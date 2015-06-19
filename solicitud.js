function validateForm() {
  var valid = 1;
  var email = document.getElementById('email');
  var email_validation = document.getElementById("email_validation");
  var name = document.getElementById('name');
  var name_validation = document.getElementById("name_validation");
  var message_validation = document.getElementById("message_validation");
  var human_validation = document.getElementById("human_validation");    
  var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  
  if (human.value != 5) {
    valid = 0;
    human_validation.innerHTML = "Incorrecto";
    human_validation.style.display = "block";
    human_validation.parentNode.style.backgroundColor = "#ffe5ea";
  } else {
    human_validation.style.display = "none";
    human_validation.parentNode.style.backgroundColor = "transparent";
  }
    
  if (name.value === "") {
    valid = 0;
    name_validation.innerHTML = "Requerido";
    name_validation.style.display = "block";
    name_validation.parentNode.style.backgroundColor = "#ffe5ea";
  } else {
    name_validation.style.display = "none";
    name_validation.parentNode.style.backgroundColor = "transparent";
  }

  if (subject.value === "") {
    valid = 0;
    subject_validation.innerHTML = "Requerido";
    subject_validation.style.display = "block";
    subject_validation.parentNode.style.backgroundColor = "#ffe5ea";
  } else {
    subject_validation.style.display = "none";
    subject_validation.parentNode.style.backgroundColor = "transparent";
  }    
    
  if (description.value === "") {
    valid = 0;
    description_validation.innerHTML = "Requerido";
    description_validation.style.display = "block";
    description_validation.parentNode.style.backgroundColor = "#ffe5ea";
  } else {
    description_validation.style.display = "none";
    description_validation.parentNode.style.backgroundColor = "transparent";
  }
  
  if (email.value === "") {
    valid = 0;
    email_validation.innerHTML = "Requerido";
    email_validation.style.display = "block";
    email_validation.parentNode.style.backgroundColor = "#ffe5ea";
  } else {
    email_validation.style.display = "none";
    email_validation.parentNode.style.backgroundColor = "transparent";
  }

  if(!filter.test(email.value)) {
    valid = 0;
    email_validation.innerHTML = "Correo electrónico inválido";
    email_validation.style.display = "block";
    email_validation.parentNode.style.backgroundColor = "#ffe5ea";
  } else {
    email_validation.style.display = "none";
    email_validation.parentNode.style.backgroundColor = "transparent";
  }
  if (!valid)
    return false;
}

