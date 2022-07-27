const modal = document.querySelector('.modal')
const header_but = document.querySelector('.header__button')
const cancel = document.getElementById('cancel')

const burger = document.querySelector('.header__burger')
const addClass = document.querySelector('.menu__list')

let open = (e) => {
    e.preventDefault()
    console.log('open btn pressed')
    modal.classList.remove('modal')
    modal.classList.add('modal_open')
}

let close = (e) => {
    e.preventDefault()
    console.log('close btn pressed')
    modal.classList.remove('modal_open')
    modal.classList.add('modal')
}

let changeBurger = () => {
    addClass.classList.toggle('show')
    console.log('func about toogle works')
}

header_but.addEventListener('click', open)
cancel.addEventListener('click', close)

burger.addEventListener('click', changeBurger)
