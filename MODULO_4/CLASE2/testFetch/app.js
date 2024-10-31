let container = document.getElementById('containerInfo')
let boton = document.getElementById('boton')
boton.addEventListener('click',mostrarApiRamdon)

function mostrarApiRamdon(){
    const url = 'https://randomuser.me/api/'
    fetch(url)
    .then((res) => res.json())
    .then((data) => {
        console.log(data,'data');
        container.innerHTML = `
    
        <p>Nombre: ${data?.results[0].name.first} ${data.results[0].name.last}</p>
        <img src='${data.results[0].picture.large}'></img>
        `
    })


// async function mostrarApiAsync() {
    
//     const url = 'https://randomuser.me/api/';
//     const res = await fetch(url);
//     const data = await res.json()
//     console.log(data,'data async');
    
//     container.innerHTML = `
    
//         <p>Nombre: ${data.results[0].name.first} ${data.results[0].name.last}</p>
//         <img src='${data.results[0].picture.large}'></img>
//     `

}