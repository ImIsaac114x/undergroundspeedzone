emailjs.init("9bU-CJpBm-YydW6Sm");

document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();

    emailjs.sendForm("service_fo5q18m", "template_1kqky8l", this)
    .then(function() {
        document.getElementById("success-message").style.display = "block";
        document.getElementById("contact-form").reset();
    }, function(error) {
        alert("Error al enviar el formulario: " + JSON.stringify(error));
    });
});

// Aplica la clase .mustard-yellow a los íconos sociales una vez cargado el DOM
document.addEventListener("DOMContentLoaded", function() {
  // Selecciona todos los <img> que correspondan a las redes sociales por su atributo alt
  const socialIcons = document.querySelectorAll(
    'img[alt="Instagram"], img[alt="Facebook"], img[alt="Twitter/X"]'
  );

  socialIcons.forEach(function(img) {
    img.classList.add("mustard-yellow");
  });
});
