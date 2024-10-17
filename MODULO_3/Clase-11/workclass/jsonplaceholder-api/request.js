/*fetch('https://jsonplaceholder.typicode.com/comments?postId=1')
    .then(resp => resp.json())
    .then(resp => console.log(resp))
    .catch(err => console.log('Error: ', err));*/

fetch('https://jsonplaceholder.typicode.com/photos/100')
    .then(resp => resp.json())
    .then(resp => {
        const albumId = document.getElementById('albumIdTxt');
        const id = document.getElementById('idTxt');
        const title = document.getElementById('titleTxt');
        const urlImg = document.getElementById('urlImg');
        const thumbnailImg = document.getElementById('thumbnailUrlImg');

        albumId.textContent = resp.albumId;
        id.textContent = resp.id;
        title.textContent = resp.title;
        urlImg.src = resp.url;
        thumbnailImg.src = resp.thumbnailUrl;

        console.log('resp: ', resp);
    })
    .catch(err => console.log(err));