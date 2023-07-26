
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

  

