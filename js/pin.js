$(document).ready(function(){
  $("#pinForm").submit(function(e){
    e.preventDefault();

    let pin = $("#pin").val().trim();
    pin = pin.replace(/\D/g, ''); // Remove all non-numeric chars
    $("#pinFeedback").removeClass('text-danger text-success').text(''); // Clear feedback

    // Validation
    if (pin === '') {
      $("#pinFeedback").addClass('text-danger').text('Please enter your PIN.');
      return;
    }

    if (!/^\d{4}$/.test(pin)) {
      $("#pinFeedback").addClass('text-danger').text('Enter a valid 4-digit PIN.');
      return;
    }

    $("#pinFeedback").addClass('text-success').text('PIN is valid! ✅');

    // Optional loading / disable button here

    setTimeout(function() {
     $("#customAlert")
        .removeClass('d-none alert-danger')
        .addClass('alert-success')
        .html(`<strong>Success!</strong> pin</b> submitted.`);

      // Redirect to home page
      window.location.href = "index.html";
    }, 500);
  });
});