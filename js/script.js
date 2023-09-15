
    function animar(elemento){
        const arrtext = elemento.innerHTML.split('');
        elemento.innerHTML = '';
        arrtext.forEach((letra, i) => {
        setTimeout(()=>{
            elemento.innerHTML += letra;
        },75 * i);       
        });
    }
    
    const titulo = document.querySelector('.animacao');
    animar(titulo);


const ativaMenu = document.querySelector('.fa-bars');
const navMenu = document.querySelector('header .navbar')

ativaMenu.addEventListener('click', ()=>{
    ativaMenu.classList.toggle('fa-x')
    navMenu.classList.toggle('ativado')
})



document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;
  const slideInterval = 4000; 

  function showSlide(n) {
    slides.forEach(slide => slide.style.display = "none");
    slides[n].style.display = "block";
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }

  function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
  }

  document.querySelector(".prev").addEventListener("click", prevSlide);
  document.querySelector(".next").addEventListener("click", nextSlide);

  showSlide(currentSlide);

  setInterval(nextSlide, slideInterval);
});

document.addEventListener('DOMContentLoaded', function () {
  var projectsList = document.querySelector('.projects_armazenamentos_web ul .menos');
  var buttonText = document.getElementById('lerMais');
  var visibleItems = Array.from(projectsList.children).slice(0, 1); 

  visibleItems.forEach(function(item) {
      item.classList.remove('hidden');
  });

  document.getElementById('lerMais').addEventListener('click', function(e) {
      e.preventDefault();

      if (projectsList.classList.contains('hidden')) {
          projectsList.classList.remove('hidden');
          buttonText.textContent = 'Mostrar menos';
      } else {
          projectsList.classList.add('hidden');
          buttonText.textContent = 'Carregar mais...';
      }
  });
});

  
  