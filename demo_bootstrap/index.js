//step by step explantino for 

document.getElementById("admissionform").addEventListener("submit", function (e)
{
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const contact = document.getElementById("contact").value.trim();
    const course = document.getElementById("course").value;
    let alertBox = document.getElementById("alertBox");
    const submittedData = document.getElementById("submitteddata");

    alertBox.innerHTML = "";
    let isValid = true;
    if (!name || !email || !contact || !course) {
        alertBox.innerHTML = `<div class="alert alert-danger">All fields are required!</div>`;
        isValid = false;
    } else if (!email.includes("@")) {
        alertBox.innerHTML = `<div class="alert alert-warning">Invalid email format!</div>`;
        isValid = false;
    } else if (!/^\d{10}$/.test(contact)) {
        alertBox.innerHTML = `<div class="alert alert-warning">Contact number must be 10 digits.</div>`;
        isValid = false;
    }
    console.log("Form validation status:", isValid);
    console.log(name, email, contact, course);

    if (isValid) {
        alertBox.innerHTML = `<div class="alert alert-success">Form submitted successfully!</div>`;
        
        submittedData.innerHTML=
        `<h5>Submitted Information:</h5>
        <ul>
        <li><strong>Name:</strong> ${name}</li>
        <li><strong>Contact:</strong> ${contact}</li>
        <li><strong>Email:</strong> ${email}</li>
        <li><strong>Course:</strong> ${course}</li>
        </ul>`;
        
        document.getElementById("admissionform").reset();
    }
});