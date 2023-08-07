let btn = document.querySelector('button')
let userName = document.querySelector('.user-name-input')
let userSurname = document.querySelector('.user-surname-input')
let userEmail= document.querySelector('.user-email-input')
let errorMsj= document.querySelector('p')
let form = document.querySelector('form')
// btn.addEventListener('click', showdata)
form.addEventListener('submit', showdata)
function showdata(e) {
    e.preventDefault()
if(userEmail.value=='poladazid@gmail.com' || userEmail.value=='aytacseferova@gmail.com'){
    errorMsj.style.display='none'
    form.reset()
}
else{
    errorMsj.style.display='block'
}
}
userName.addEventListener('focus', changeInputColor)
function changeInputColor ()