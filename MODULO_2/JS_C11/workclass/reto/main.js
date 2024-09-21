const counterElement = document.getElementById("counter");

let count = 0; // 35
counterElement.innerHTML = count

// funcion para aumentar valor
const increaseCounter = () => {
    count++ // count = 2
    counterElement.innerHTML = count
}

// funcion para decrementar valor

const decreaseCounter = () => {
     // count = -1
    if(count > 0){
        count--
        counterElement.innerHTML = count
    }   
}