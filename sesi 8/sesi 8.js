let passwordlong = document.getElementById('PasswordLong')
let Password = document.getElementById('Password')
let saveBtn = document.getElementById('saveBtn')
const generatePassword = (len) => {
    const lowAlpabet = "abcdefghijklmnopqrstuvwxyz"
    const upAlpabet = "ABCDEFGHIJKLNMOPQRSTUVWXYZ"
    const Number ="1234567890"
    const symbol = "!@#$%^&*()-_`"

const data = lowAlpabet + upAlpabet + Number + symbol;
let generator = '';
for (let index = 0; index < len; index++) {
    generator += data[~~(Math.random() * data.length)]
}
return generator
}

const  getPassword = () => {
const newPassword = generatePassword(passwordlong.value) 
Password.value = newPassword
setTimeout(() => {
alert('Password sudah di buat')
}, 1000)
}
const savePassword = () => {
        document.title = Password.value
        saveBtn.setAttribute('href', 'data:text/plain;charset=uft-8,' + encodeURIComponent(`Password saya: ${document.title}`))
        saveBtn.setAttribute('download', 'Mypassword')
        setTimeout(() => {
            alert('Password Telah di Simpan')
        }, 1000)
}