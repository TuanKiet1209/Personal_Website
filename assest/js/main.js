/*----------- SHOW MENU ------------- */
const navMenu = document.getElementById('nav-menu'),
navToggle=document.getElementById('nav-toggle'),
navClose=document.getElementById('nav-close')

/*----------- MENU SHOW ------------- */

if(navToggle){
    navToggle.addEventListener('click',() => {
        navMenu.classList.add('show-menu')
    })
}

/*-----------  MENU HIDDEN ------------- */
if(navClose){
    navClose.addEventListener('click',() => {
        navMenu.classList.remove('show-menu')
    })
}

/*----------- REMOVE MENU MOBILE ------------- */

const navLink=document.querySelectorAll('.nav__link')
const linkAction=() =>{
    const navMenu=document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n =>n.addEventListener('click',linkAction))

/* ================== CHANGE BACKGROUND HEADER ============== */
const blurHeader =()=>{
    const header =document.getElementById('header')
    // khi scroll lớn hơn 50 chiều cao khung hình, hãy thêm class blur-scroll vào thẻ header
    this.scrollY >= 50 ? header.classList.add('blur-header')
                       : header.classList.remove('blur-header')                       
}
window.addEventListener('scroll',blurHeader)

/* ================== EMAIL ============== */
const contactForm =document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message')

const sendEmail =(e) =>{
    e.preventDefault()
    //serviceID--templateID--#form--public key
    emailjs.sendForm('service_wblbldq','template_h8jvnfo','#contact-form','1B_BPL0geO2y8rdM5')
    .then(() =>{
        //hiển thị thông báo tin nhắn
        contactMessage.textContent = 'Tin nhắn đã được gửi thành công✅✅✅'
        //xóa thông báo sau 5 giây
        setTimeout(()=> {
            contactMessage.textContent= ''
        }, 5000)
        //xóa trường nhập
        contactForm.reset()
    },() =>{
        //hiển thị thông báo lỗi tin nhắn
        contactMessage.textContent = 'Tin nhắn không được gửi❌❌❌'
    })
}

contactForm.addEventListener('submit', sendEmail)

/* ===============SHOW SCROLL UP ============ */
const scrollUp = () =>{
    const scrollUp = document.getElementById('scroll-up')

    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                                                :scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll',scrollUp)

/* ===============SCROLL SECTION ACTIVE LINK ============ */
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
                sectionTop =current.offsetTop - 58,
                sectionId = current.getAttribute('id'),
                sectionClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            sectionClass.classList.add('active-link')  
        }else{
            sectionClass.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll',scrollActive)
/* ===============SCROLL ANIMATION ============ */
const sr = ScrollReveal({
    origin:'top',
    distance:'60px',
    duration: 2500,
    delay:400,
})

sr.reveal(`.home__data, .home__social, .contact__container, .footer__container`)
sr.reveal(`.home__image`, {origin: 'bottom'})
sr.reveal(`.about__data, .skills__data`, {origin: 'left'})
sr.reveal(`.about__image, .skills__content`, {origin: 'right'})
sr.reveal(`.services__card, .projects__card`, {interval: 100})