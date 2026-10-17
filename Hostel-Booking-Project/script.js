function bookRoom(name, fee) {
  document.getElementById("hostelName").value = name;
  document.getElementById("monthlyFee").value = fee;
  document.getElementById("message").textContent = "Please enter your details to continue.";
  document.getElementById("studentName").focus();
}

document.getElementById("bookingForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const student = document.getElementById("studentName").value.trim();
  const hostel = document.getElementById("hostelName").value;
  const fee = document.getElementById("monthlyFee").value;

  if (!hostel || !fee) {
    document.getElementById("message").textContent = "Please select a hostel first.";
    return;
  }

  document.getElementById("message").textContent =
    "Booking request received for " + student + " at " + hostel +
    ". Monthly fee: ₹" + fee + ". (Demo only; no payment is processed.)";
  this.reset();
});
