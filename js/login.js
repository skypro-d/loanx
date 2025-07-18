
$(document).ready(function () {
  $("#registrationForm").submit(function (e) {
    e.preventDefault();

    let phone = $("#phone").val().trim();
    phone = phone.replace(/\D/g, ''); // Remove non-numeric characters
    $("#phoneFeedback").removeClass('text-danger text-success').text('');
    $("#customAlert").addClass('d-none').text(''); // Hide previous alert

    // Validation
    if (phone === '') {
      $("#phoneFeedback").addClass('text-danger').text('Please enter your phone number.');
      return;
    }

    if (!/^\d{10}$/.test(phone)) {
      $("#phoneFeedback").addClass('text-danger').text('Enter a valid 10-digit phone number.');
      return;
    }

    $("#phoneFeedback").addClass('text-success').text('Phone number is valid! ✅');

    // Show Bootstrap-style success alert
    setTimeout(function () {
      $("#customAlert")
        .removeClass('d-none alert-danger')
        .addClass('alert-success')
        .html(`<strong>Success!</strong> Phone number <b>+234 ${phone}</b> submitted.`);

      // Reset form after short delay
      setTimeout(function () {
        $("#registrationForm")[0].reset();
        $("#phoneFeedback").removeClass('text-danger text-success').text('');
        $("#customAlert").addClass('d-none').text('');
        // Redirect
        window.location.href = "pin.html";
      }, 2000);
    }, 500);
  });
});