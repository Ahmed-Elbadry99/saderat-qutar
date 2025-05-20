
const showMenu = document.querySelector('.show-menu');

if(showMenu){
     showMenu.addEventListener("click", () => {
          document.querySelector('.responsive-menu').classList.add("show")
          document.querySelector('.overlay').classList.add("show")
     })


     document.querySelector('.overlay').addEventListener("click", () => {
          document.querySelector('.responsive-menu').classList.remove("show")
          document.querySelector('.overlay').classList.remove("show")
     })
}





// 


document.querySelectorAll('.option').forEach(option => {
  option.addEventListener('click', () => {
    const selected = document.querySelector('.selected-option');
    const icon = option.dataset.icon;
    selected.innerHTML = `<img src="${icon}" class="option-icon" alt=""> ${option.textContent.trim()}`;
    document.getElementById('mySelectValue').value = option.dataset.value;
  });
});
