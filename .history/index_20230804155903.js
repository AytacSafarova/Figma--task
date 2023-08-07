let btn = document.querySelector('button')
let userName = document.querySelector('.user-name-input')
let userSurname = document.querySelector('.user-surname-input')
let userEmail= document.querySelector('.user-email-input')

let form = document.querySelector('form')
// btn.addEventListener('click', showdata)
form.addEventListener('submit', showdata)
function showdata(e) {
    e.preventDefault()
if(userEmail.value=='poladazid')
    form.reset()
}