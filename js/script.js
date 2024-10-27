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

  