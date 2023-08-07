let btn = document.querySelector('button')
let userName= document.querySelector('.user-name-input')
let userSurname= document.querySelector('.user-name-input')

btn.addEventListener('click', showdata)
function showdata(e){
    e.preventDefault()
    console.log(userName.value);
}