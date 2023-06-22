function toogle() {
  console.log(document.querySelector(".fa-solid").classList[1])
  if (document.querySelector(".fa-solid").classList[1] == "fa-eye") {
    document.querySelector(".fa-solid").classList.remove("fa-eye")
    document.querySelector(".fa-solid").classList.add("fa-eye-slash")

    document.getElementById("password").type = "text"
  } else {
    document.querySelector(".fa-solid").classList.remove("fa-eye-slash")
    document.querySelector(".fa-solid").classList.add("fa-eye")

    document.getElementById("password").type = "password"
  }
}

document.querySelector(".fa-solid").addEventListener("click", () => toogle())


function valid() {
  const email = document.getElementById('email').value;
  console.log(email)

  if (email.includes('@') === true && email.includes('.com') === true) {
    document.getElementById("email").classList.remove("input-invalid")
    document.querySelector('span').innerHTML = ""
    console.log('make login')
  }
  else {
    document.getElementById("email").classList.add("input-invalid")
    document.querySelector("span").innerHTML = "Digite um e-mail válido"
  }
}