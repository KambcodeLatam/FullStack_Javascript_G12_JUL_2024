const participantList = document.getElementById("list-1");

const addToList = () => {
    const name = 'Daniel';
    // participantList.innerHTML = participantList.innerHTML + "<li>" + name + "</li>"
    participantList.innerHTML += "<li>" + name + "</li>"
}