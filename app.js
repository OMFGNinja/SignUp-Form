const password = document.querySelector('#password')
const confirmPass = document.querySelector('#confirm')
const pConfirm = document.querySelector('#pConfirm')

let nombreRegex = /^[a-z A-ZÀ-ÿ\u00f1\u00d1]+$/ 

confirmPass.addEventListener('input', change)

function change(){
    if (password.value === confirmPass.value) {
        confirmPass.setCustomValidity('')
        pConfirm.style.opacity = '0'
    } else {
        confirmPass.setCustomValidity('*Passwords do not match')
        pConfirm.style.opacity = '1'
    }
}