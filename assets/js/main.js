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
const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
  const scrollY = window.pageYOffset

  sections.forEach(current =>{
    const sectionHeight = current.offsetHeight,
    sectionTop = current.offsetTop - 58,
    sectionId = current.getAttribute('id'),
    sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId +']');
  
    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
      sectionsClass.classList.add('active-link')
    }else{
      sectionsClass.classList.remove('active-link')
    }
  
  })
}

window.addEventListener('scroll', scrollActive)


/*=============== SHOW SCROLL UP ===============*/

const scrollUp = () => {
  const scrollUp = document.getElementById('scroll-up')

  // quando a rolagem  for maior que 350 viewport de altura, 
  // adicionar a classe show-scroll  para a tag com scrollup
  this.scrollY >= 350 ? scrollUp.classList.add('show-scroll') : scrollUp.classList.remove('show-scroll');
  
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL REVEAL ANIMATION ===============*/

const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 400,
})

sr.reveal(`.home__data, .footer__container, .footer__group`)
sr.reveal(`.home__img`, {delay: 700, origin: 'bottom'})
sr.reveal(`.logos__img, .program__card, .pricing__card`, {interval: 100})
sr.reveal(`.choose__img, .calculate__content`, { origin: 'left'})
sr.reveal(`.choose__content, .calculate__img `, { origin: 'right'})












/*=============== CALCULATE JS ===============*/
const calculateForm = document.getElementById("calculate-form"),
  calculateCm = document.getElementById("calculate-cm"),
  calculateKg = document.getElementById("calculate-kg"),
  calculateMessage = document.getElementById("calculate-message");

const calculateIMC = (e) => {
  e.preventDefault();

  // Checar se os campos tem algum valor preenchido
  if (calculateCm.value === "" || calculateKg.value === "") {
    // Adicionar e remover cor
    calculateMessage.classList.remove("color-green");
    calculateMessage.classList.add("color-red");

    // mostrar mensagem de alerta
    calculateMessage.textContent = "Preencha sua altura e peso, por favor. ????";

    // Remover mensagem de alerta ap??s 3 segundos
    setTimeout(() => {
      calculateMessage.textContent = "";
    }, 3000);
  } else {
    // Formula IMC
    const cm = calculateCm.value / 100,
      kg = calculateKg.value,
      imc = Math.round(kg / (cm * cm));

    // Mostrar o status de sa??de do usu??rio
    if (imc < 18.5) {
      // Adicionar cor e mensagem de alerta
      calculateMessage.classList.add("color-green");
      calculateMessage.textContent = `Seu IMC ?? ${imc} e voc?? est?? muito abaixo do peso ????`;
    } else if (imc < 25) {
      calculateMessage.classList.add("color-green");
      calculateMessage.textContent = `Seu IMC ?? ${imc} e voc?? est?? saud??vel ????????`;
    } else {
      calculateMessage.classList.add("color-green");
      calculateMessage.textContent = `Seu IMC ?? ${imc} e voc?? est?? a cima do peso, cuidado! `;
    }
    // limpar campo
    calculateCm.value = "";
    calculateKg.value = "";

    // Remover mensagem depois de 4 segundos
    setTimeout(() => {
      calculateMessage.textContent = "";
    }, 4000);
  }
};

calculateForm.addEventListener("submit", calculateIMC);

/*=============== EMAIL JS ===============*/

const contactForm = document.getElementById("contact-form"),
  contactMessage = document.getElementById("contact-message"),
  contactUser = document.getElementById("contact-user");

const sendEmail = (e) => {
  e.preventDefault();

  // Checar se o campo ?? v??lido ou n??o.
  if (contactUser.value === "") {
    // adicionar mensagem de alerta para usu??rio preencer campo
    contactMessage.classList.remove("color-green");
    contactMessage.classList.add("color-red");

    // Mostrar mensagem
    contactMessage.textContent = "Por favor,preencha o campo com seu email ????";

    //remover menssagem ap??s 3 segundos
    setTimeout(() => {
      contactMessage.textContent = "";
    }, 4000);
  } else {
    // ServiceID, templateID, #form, publicKey
    emailjs
      .sendForm(
        "service_zjgjd84",
        "template_lxcp5pa",
        "#contact-form",
        "jUnNvRe9PKffk0vFV"
      )
      .then( () => {
          contactMessage.classList.add("color-green");
          contactMessage.textContent = "Inscri????o realizada com sucesso!";
          // sumir com mensagem de alerta
          setTimeout(() => {
            contactMessage.textContent = ""
          }, 3000)
        }, (error) => {
          alert('OOPS! Algo de errado n??o est?? certo, verifique seu email.', error)
        });

    // limpar campo de email
    contactUser.value = ''
  }
};

contactForm.addEventListener("submit", sendEmail);
