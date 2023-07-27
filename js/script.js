
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
  const slideInterval = 4000; // Tempo de transição entre os slides em milissegundos

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

  // Adicione a funcionalidade para os botões de navegação
  document.querySelector(".prev").addEventListener("click", prevSlide);
  document.querySelector(".next").addEventListener("click", nextSlide);

  // Inicie o carrossel
  showSlide(currentSlide);

  // Defina o intervalo para avançar automaticamente
  setInterval(nextSlide, slideInterval);
});



  
  