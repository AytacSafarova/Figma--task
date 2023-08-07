let btn = document.querySelector('button')
let userName= document.querySelector('.user-name-input')
let userSurname= document.querySelector('.user-surname-input')
let form= document.querySelector('form')
// btn.addEventListener('click', showdata)
function showdata(e){
    e.preventDefault()
    console.log(userName.value);
    console.log(userSurname.value);
form.reset()
}