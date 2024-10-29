let divOne = document.getElementById('containerOne');
let divTwo = document.getElementById('containerTwo');
let boton = document.getElementById('boton')


boton.addEventListener('click',texto)
boton.addEventListener('click',texto2)

function texto() {
    divOne.innerHTML = 'Este es mi primer ejercicio'
    divOne.style.margin = '50px'
    divOne.style.background = 'gray'
    divOne.style.padding = '10px'
}

function texto2() {
    divTwo.innerHTML = 'Este es mi Segunda funcion '
    divTwo.style.margin = '50px'
    divTwo.style.background = 'green'
    divTwo.style.padding = '10px'
}