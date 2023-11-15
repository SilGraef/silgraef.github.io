function submitForm() {
    // Get form values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    // Perform simple validation
    if (name === "" || email === "" || message === "") {
        alert("Please fill in all fields");
        return;
    }

    // You can perform additional validation if needed

    // Construct the message body
    var emailBody = "Name: " + name + "\n";
    emailBody += "Email: " + email + "\n";
    emailBody += "Message:\n" + message;

    // You can now send the emailBody to your server using AJAX or other methods
    // For simplicity, we'll just display the message in the console
    console.log(emailBody);

    // Optionally, you can clear the form fields
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";

    // Provide feedback to the user (you can customize this part)
    alert("Form submitted successfully!");
}