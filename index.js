let message = document.querySelector("#message");

function addMovie (event){
    event.preventDefault();
    let inputFeild = document.querySelector("input");
    let movie = document.createElement('li');
    let movieTitle = document.createElement('span');
    movieTitle.textContent = inputFeild.value;
    movieTitle.addEventListener('click', crossOffMovie);
    movie.appendChild(movieTitle);
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = 'x';
    deleteBtn.addEventListener('click', deleteMovie);
    movie.appendChild(deleteBtn);
    let movieSection = document.querySelector('ul');
    movieSection.appendChild(movie);
    inputFeild.value = '';
    
}
document.querySelector("form").addEventListener('submit', addMovie);

 let deleteMovie = (event) => {
    event.target.parentNode.remove();
    message.textContent = "Movie Deleted!";
    revealMessage();
 }

 let crossOffMovie = (event) => {
    event.target.classList.toggle("checked");
    if (event.target.classList.contains('checked')) {
        message.textContent = "Movie Watched";
    } else {
        message.textContent = "Movie added back!";
    }
 }


let revealMessage = () => {
    let timeOut = setTimeout(() => {
        message.classList.add('hide')

    }, 5000)
}