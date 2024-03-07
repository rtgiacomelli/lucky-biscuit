//variáveis
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnOpen = document.querySelector("#btnOpen")
const btnReset = document.querySelector("#btnReset")

//eventos
btnOpen.addEventListener('click', toggleScreen)
btnReset.addEventListener('click', toggleScreen)

//funções
function toggleScreen () {
  screen1.classList.toggle('hide')
  screen2.classList.toggle('hide')
}
