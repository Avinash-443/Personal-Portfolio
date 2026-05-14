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
const scrollUp = () =>{
    const scrollUp = document.getElementById('scroll-up')
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                        : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/* ================================  SCROLL SECTIONS ACTIVE LINK ====================== */
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollDown = window.scrollY

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 50,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
        
        if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }
    })
}

window.addEventListener('scroll', scrollActive)

/* ================================  SCROLL REVEAL ANIMATION ====================== */
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    // reset: true,   ==== animation will repeat
})

sr.reveal(`.home__content, .footer__container`)
sr.reveal(`.home__data`, {delay: 300, origin: 'bottom'})

sr.reveal(`.about__content, .contact__content`, {origin: 'bottom'})
sr.reveal(`.about__image, .contact__form`, {delay: 300})

sr.reveal(`.projects__card`, {interval: 100})

sr.reveal(`.services__card`, {
    interval: 100,
    origin: 'bottom'
})
