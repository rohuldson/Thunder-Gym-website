/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/* ==== MENU SHOW =============*/
/* Validate if constant exists */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/* ==== MENU HIDDEN =============*/
/* Validate if constant exists */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(".nav__link");

const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  // Quando clicarmos no nav__link, removeremos o show-menu
  navMenu.classList.remove("show-menu");
};
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () => {
  const header = document.getElementById("header");
  // quando o scroll (rolagem) for maior que 50 viewport height, adiciona a classe scroll-header
  this.scrollY >= 50
    ? header.classList.add("bg-header")
    : header.classList.remove("bg-header");
};

window.addEventListener("scroll", scrollHeader);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

/*=============== SHOW SCROLL UP ===============*/

/*=============== SCROLL REVEAL ANIMATION ===============*/

/*=============== CALCULATE JS ===============*/
const calculateForm = document.getElementById('calculate-form'),
      calculateCm = document.getElementById('calculate-cm'),
      calculateKg = document.getElementById('calculate-kg'),
      calculateMessage = document.getElementById('calculate-message')

      const calculateIMC = (e) => {
       e.preventDefault();

        // Checar se os campos tem algum valor preenchido
        if(calculateCm.value === '' || calculateKg.value === ''){
          // Adicionar e remover cor
          calculateMessage.classList.remove('color-green')
          calculateMessage.classList.add('color-red')

          // mostrar mensagem
          calculateMessage.textContent = 'Preencha sua altura e peso, por favor.'
        }
      }

      calculateForm.addEventListener('submit', calculateIMC)
/*=============== EMAIL JS ===============*/
