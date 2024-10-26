
const toggleButton = document.querySelector("#toggleBtn");
const dropdown = document.querySelector("#dropdown");

console.log(dropdown);

toggleButton.addEventListener('click', ()=>{
    dropdown.classList.toggle('hidden');
});

  