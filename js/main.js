const firebaseConfig = {
  apiKey: "AIzaSyCA6gjlHyesnip_QCr9-TV9mA48sofPVDU",
  authDomain: "reservation-site-93cb2.firebaseapp.com",
  databaseURL: "https://reservation-site-93cb2.firebaseio.com",
  projectId: "reservation-site-93cb2",
  storageBucket: "reservation-site-93cb2.appspot.com",
  messagingSenderId: "89005609281",
  appId: "1:89005609281:web:f50957798441d793"
};

firebase.initializeApp(firebaseConfig);

var database = firebase.database();

// CONTACT FORM

// create reservationData object which will be populated with user input
function validEmail() {
  var email = document.querySelector("#inputEmail");
  // Check to see whether the user has entered a value to the email field.
  if (email.value === "") {
    // If the email field is blank, display a message to the user.
    // Add an error class to the input field that will give it a red border.
    email.className = "error";
    return false;
  } else {
    // Otherwise, clear out the error message.
    document.getElementById("inputEmail").innerText = "";
    // Remove the error class from the input field
    email.className = "";
    return true;
  }
}
function validName() {
  var name = document.querySelector("#inputName");
  // Check to see whether the user has entered a value to the name field.
  if (name.value === "") {
    // If the email field is blank, display a message to the user.
    // Add an error class to the input field that will give it a red border.
    name.className = "error";
    return false;
  } else {
    // Otherwise, clear out the error message.
    document.getElementById("inputName").innerText = "";
    // Remove the error class from the input field
    name.className = "";
    return true;
  }
}
function validMessage() {
  var message = document.querySelector("#inputMessage");
  // Check to see whether the user has entered a value to the email field.
  if (message.value === "") {
    // If the email field is blank, display a message to the user.
    // Add an error class to the input field that will give it a red border.
    message.className = "error";
    return false;
  } else {
    // Otherwise, clear out the error message.
    document.getElementById("inputMessage").innerText = "";
    // Remove the error class from the input field
    message.className = "";
    return true;
  }
}

function emailValidation() {
  console.log("form submitted");

  if (validName() && validEmail() && validMessage()) {
    console.log("all validation passed");
    // var mess = document.querySelector('#inputMessage').value;
    $.ajax({
      url: "https://formspree.io/kindojoflowarts@gmail.com",
      method: "POST",
      data: $("#inputMessage").serialize,
      dataType: "json"
    });
    document.getElementById("required").style.display = "none";
    document.getElementById("complete").style.display = "block";
    console.log("email sent");
  } else {
    event.preventDefault();
    document.getElementById("required").style.display = "block";
    console.log("email not sent");
  }
}

// RESERVATION FORM

function validNameInput() {
  var clientName = document.querySelector("#name");
  // Check to see whether the user has entered a value to the name field.
  if (clientName.value === "") {
    // If the email field is blank, display a message to the user.
    // Add an error class to the input field that will give it a red border.
    clientName.className = "error";
    return false;
  } else {
    // Otherwise, clear out the error message.
    document.getElementById("name").innerText = "";
    // Remove the error class from the input field
    clientName.className = "";
    return true;
  }
}

function validEmailInput() {
  var clientEmail = document.querySelector("#email");
  // Check to see whether the user has entered a value to the email field.
  if (clientEmail.value === "") {
    // If the email field is blank, display a message to the user.
    // Add an error class to the input field that will give it a red border.
    clientEmail.className = "error";
    return false;
  } else {
    // Otherwise, clear out the error message.
    document.getElementById("email").innerText = "";
    // Remove the error class from the input field
    clientEmail.className = "";
    return true;
  }
}

function validDateInput() {
  var dateInputField = document.querySelector("#date");
  // Check to see whether the user has entered a value to the date field.
  if (dateInputField.value === "") {
    // If the date field is blank, display a message to the user.
    // Add an error class to the input field that will give it a red border.
    dateInputField.className = "error";
    return false;
  } else {
    // Otherwise, clear out the error message.
    document.getElementById("date").innerText = "";
    // Remove the error class from the input field
    dateInputField.className = "";
    return true;
  }
}

function validStartTimeInput() {
  var startTimeInput = document.querySelector("#starttime");
  // Check to see whether the user has entered a value to the time field.
  if (startTimeInput.value === "") {
    // If the time field is blank, display a message to the user.

    // Add an error class to the input field that will give it a red border.
    startTimeInput.className = "error";
    return false;
  } else if (startTimeInput.value < "09:00") {
    document.getElementById("early").style.display = "inline";
    startTimeInput.className = "error";
    document.getElementById("apptime").style.display = "block";
  } else {
    if (startTimeInput.value >= "09:00") {
      document.getElementById("early").style.display = "none";
    }
    // Otherwise, clear out the error message.
    document.getElementById("apptime").style.display = "none";
    document.getElementById("starttime").innerText = "";
    // Remove the error class from the input field
    startTimeInput.className = "";
    return true;
  }
}
function validEndTimeInput() {
  var endTimeInput = document.querySelector("#endtime");
  // Check to see whether the user has entered a value to the time field.
  if (endTimeInput.value === "") {
    // If the email field is blank, display a message to the user.

    // Add an error class to the input field that will give it a red border.
    endTimeInput.className = "error";
    return false;
  } else if (endTimeInput.value < document.querySelector("#starttime").value) {
    // endTimeInput.className = 'error';
    document.getElementById("apptime").style.display = "block";
  } else if (endTimeInput.value > "19:00") {
    document.getElementById("late").style.display = "inline";
    endTimeInput.className = "error";
    document.getElementById("apptime").style.display = "block";
  } else {
    if (endTimeInput.value <= "19:00") {
      document.getElementById("late").style.display = "none";
    }
    document.getElementById("apptime").style.display = "none";
    // Otherwise, clear out the error message.
    document.getElementById("endtime").innerText = "";
    // Remove the error class from the input field
    endTimeInput.className = "";
    return true;
  }
}

function validStudentsInput() {
  var numStudents = $("#students option:selected").val();
  // Check to see whether the user has entered a value to the name field.
  if (numStudents === "") {
    // If the email field is blank, display a message to the user.
    // Add an error class to the input field that will give it a red border.
    $("#students").css({ border: "2px solid red" });
    // numStudents.className = 'error';
    return false;
  } else {
    // Remove the error class from the input field
    $("#students").css({ border: "1px solid grey" });
    return true;
  }
}

$(function() {
  var select = $(".1-20");
  for (i = ""; i <= 5; i++) {
    select.append(
      $("<option></option>")
        .val(i)
        .html(i)
    );
  }
});

function validClassInput() {
  var classInputField = document.querySelector("#lesson");
  // Check to see whether the user has entered a value to the email field.
  if (classInputField.value === "") {
    // Add an error class to the input field that will give it a red border.
    classInputField.className = "error";
  } else {
    // Otherwise, clear out the error message.
    document.getElementById("lesson").innerText = "";
    // Remove the error class from the input field
    classInputField.className = "";
    return true;
  }
}

function validLocationInput() {
  var classInputField = document.querySelector("#pac-input");
  // Check to see whether the user has entered a value to the email field.
  if (classInputField.value === "") {
    // Add an error class to the input field that will give it a red border.
    classInputField.className = "error";
  } else {
    // Otherwise, clear out the error message.
    document.getElementById("pac-input").innerText = "";
    // Remove the error class from the input field
    classInputField.className = "";
    return true;
  }
}

var data = {
  name: "",
  email: "",
  date: "",
  starttime: "",
  endtime: "",
  students: "",
  lesson: "",
  location: "",
  total: 0
};

function priceTimesStudents() {
  var price = 0;
  var total = 0;

  if ($("#lesson").val() === "Body fundamentals") {
    price = 35;
    // }else if ($('#lesson').val() === "Intro to FIre-Spinning"){
    // 	price = 150;
  } else {
    price = 40;
  }

  total = price * $("#students option:selected").val();

  return total;
}


function doValidation() {
  console.log("form submitted");

  event.preventDefault();

  if (
    validNameInput() &&
    validEmailInput() &&
    validDateInput() &&
    validStartTimeInput() &&
    validEndTimeInput() &&
    validStudentsInput() &&
    validClassInput() &&
    validLocationInput()
  ) {
    data.name = $("#name").val();
    data.email = $("#email").val();
    data.date = $("#date").val();
    data.starttime = $("#starttime").val();
    data.endtime = $("#endtime").val();
    data.lesson = $("#lesson").val();
    data.students = $("#students option:selected").val();
    data.location = $("#pac-input").val();
    data.total = priceTimesStudents();

    document.getElementById("required").style.display = "none";
    document.getElementById("apptime").style.display = "block";
    document.getElementById("apptime").style.display = "none";
		confirmSavedToDatabase(data);
		
  } else {
    document.getElementById("required").style.display = "block";
    console.log("validation error");
  }
}



function sendEmail(name, email, message){
	var form = document.createElement('form');
	form.setAttribute("action", "https://formspree.io/f/moqydrll")
	form.setAttribute("method", "POST")
	form.setAttribute("style", "display: none;")

	// Subject for your email
	var field = document.createElement("input");
	field.setAttribute("type", "hidden");
	field.setAttribute("name", "_subject");
	field.setAttribute("value", "Contact form submitted");
	form.appendChild(field);

	// Contact email address        
	field = document.createElement("input");
	field.setAttribute("type", "hidden");
	field.setAttribute("name", "email");
	field.setAttribute("value", email);
	form.appendChild(field);

	// Your user's name
	field = document.createElement("input");              
	field.setAttribute("type", "hidden");
	field.setAttribute("name", "name");
	field.setAttribute("value", name);
	form.appendChild(field);

	// The text message
	field = document.createElement("input");              
	field.setAttribute("type", "hidden");
	field.setAttribute("name", "message");
	field.setAttribute("value", message);
	form.appendChild(field);

	document.body.appendChild(form);    
	form.submit();
}


function confirmSavedToDatabase(dataObject) {
	var reservationsReference = database.ref("reservations");
	document.getElementById("complete").style.display = "block";

  if (reservationsReference.push(dataObject)) {
    console.log("saved to database");
  }

	var name = dataObject.name;
  var email = dataObject.email;
  var dataSentence = dataObject.lesson + " class for " + dataObject.students + " student(s) at " + dataObject.location + " on " + dataObject.date + " starting at " + dataObject.starttime + " and ending at " + dataObject.endtime + ".  The total is " + dataObject.total + "."
  // var dataSentenceAll = name + ' (' + email + ') schdeuled a ' + lesson + " class for " + students + " student(s) at " + location + " on " + date + " starting at " + starttime + " and ending at " + endtime + ".  The total is " + total + "."
	
	sendEmail(name, email, dataSentence)

}
