// dropdown menu //
const toggleButton = document.querySelector("#toggleBtn");
const dropdown = document.querySelector("#dropdown");

console.log(dropdown);

toggleButton.addEventListener('click', ()=>{
    dropdown.classList.toggle('hidden');
});
// dropdown menu //

//auto type //
var typed = new Typed(".auto-input",{
    strings: ["Afia Mobasshira", "Frontend Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true
})
//auto type //

//contact form success message submission
const form = document.getElementById("contactForm");
  form.addEventListener("submit", function(event) {
    event.preventDefault();
    fetch(form.action, {
      method: "POST",
      body: new FormData(form)
    })
    .then(response => response.text())
    .then((text) => {
      alert("Thank you! Your message has been received.");
      form.reset();
    })
    .catch(error => console.error("Error!", error.message));
  });
//contact form success message submission

//Adding Optional JavaScript for Enhanced Scroll Control (Optional)
//If need custom scroll behavior (e.g., control scroll speed or adjust offsets), can use JavaScript for more control.
//=============================//
  // Select all links with hashes
//   document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener("click", function(e) {
//       e.preventDefault();

//       // Smoothly scroll to the target section
//       document.querySelector(this.getAttribute("href")).scrollIntoView({
//         behavior: "smooth",
//         block: "start"
//       });
//     });
//   });
//=============================//
  