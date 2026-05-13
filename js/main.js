/* ================================  SHOW MENU ====================== */
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

if (navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

if (navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/* ================================  REMOVE MENU MOBILE ====================== */
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/* ================================  HOME TYPED JS ====================== */
const typedHome = new Typed('#home-typed', {
    strings: ['Web Developer','Software Engineer','Application Developer'],
    typeSpeed: 80,
    backSpeed: 40,
    backDelay: 2000,
    loop: true,
    cursorChar: '_',
})

/* ================================  ADD SHADOW HEADER ====================== */
const shadowHeader = () =>{
    const header = document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('shadow-header')
                       : header.classList.remove('shadow-header')
}
window.addEventListener('scroll', shadowHeader)

/* ================================  CONTACT EMAIL JS ====================== */
const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message')

const sendEmail = (e) =>{
    e.preventDefault()

    emailjs.sendForm('service_o5axc44','template_x4p1kvd','#contact-form','8PTvW5gEhbkOt8aFL')
    .then(() => {
        contactMessage.textContent = 'Message Sent Successfully...✅'

        setTimeout(() => {
            contactMessage.textContent = ''
        }, 5000)

        contactForm.reset()
    }, () => {
        contactMessage.textContent = 'Message not sent (service error)'
    })
}
contactForm.addEventListener('submit', sendEmail)





/* ================================  SHOW SCROLL UP ====================== */


/* ================================  SCROLL SECTIONS ACTIVE LINK ====================== */


/* ================================  SCROLL REVEAL ANIMATION ====================== */