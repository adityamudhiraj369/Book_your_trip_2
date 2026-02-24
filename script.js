(function(){
    emailjs.init("bfKwz8IbTo_qoQC0g"); 
})();

document.getElementById("bookingForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const templateParams = {
        name: document.getElementById("name").value,
        phone: document.getElementById("phone").value,
        drop: document.getElementById("drop").value,
        date: document.getElementById("date").value,
        persons: document.getElementById("persons").value,
        message: document.getElementById("message").value
    };

    emailjs.send("service_upmszld","template_eilrsob", templateParams)
    .then(function(response) {
        document.getElementById("status").innerHTML = "Booking Sent Successfully ✅";
        document.getElementById("bookingForm").reset();
    }, function(error) {
        document.getElementById("status").innerHTML = "Failed to send booking ❌";
    });
});