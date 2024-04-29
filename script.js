// Function to handle form submission
function addContact(event) {
    event.preventDefault(); // Prevent form submission

    // Get input values
    var name = document.getElementById("nameInput").value.trim();
    var phone = document.getElementById("phoneInput").value.trim();

    // Validate input
    if (name === "" || phone === "") {
        alert("Please enter both name and phone number.");
        return;
    }

    // Create a new row for the table
    var table = document.getElementById("contactTable");
    var newRow = table.insertRow(-1);

    // Insert cells for name and phone number
    var nameCell = newRow.insertCell(0);
    var phoneCell = newRow.insertCell(1);
    nameCell.textContent = name;
    phoneCell.textContent = phone;

    // Clear form fields
    document.getElementById("nameInput").value = "";
    document.getElementById("phoneInput").value = "";
}

// Add event listener to the form for form submission
document.getElementById("contactForm").addEventListener("submit", addContact);
