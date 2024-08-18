document.getElementById('searchBar').addEventListener('input', function () {
    let filter = this.value.toUpperCase();
    let notes = document.getElementsByClassName('note-card');

    for (let i = 0; i < notes.length; i++) {
        let title = notes[i].getElementsByTagName('h2')[0];
        if (title.innerHTML.toUpperCase().indexOf(filter) > -1) {
            notes[i].style.display = "";
        } else {
            notes[i].style.display = "none";
        }
    }
});
