let nya = document.getElementById("nya")
let mail = document.getElementById("mail")
let msg = document.getElementById("msg")
let up = document.getElementById("up")

function sendMessage() {
  if(nya.value == "" || mail.value == "" || msg.value == "") {
    alert("Debe ingresar todos los datos")
  }
  else {
    alert("¡Mensaje enviado correctamente!")
  }
}

nya.addEventListener('focus', () => {
  nya.classList.add("special-background-color")
})

nya.addEventListener('blur', () => {
  nya.classList.remove("special-background-color")
})

mail.addEventListener('focus', () => {
  mail.classList.add("special-background-color")
})

mail.addEventListener('blur', () => {
  mail.classList.remove("special-background-color")
})

msg.addEventListener('focus', () => {
  msg.classList.add("special-background-color")
})

msg.addEventListener('blur', () => {
  msg.classList.remove("special-background-color")
})

document.addEventListener("scroll", () => {
  if(window.scrollY >= 530) {
    up.style.display = "flex"
  }
  else {
    up.style.display = "none"
  }
})