let form = document.querySelector("form");
let userInfo = {};

function handleSubmit(event){
    event.preventDefault();
    userInfo.name = form.elements.name.value;
    userInfo.email = form.elements.email.value;
    userInfo.movies = form.elements.movies.value;
    userInfo.gender = form.elements.gender.value;
    userInfo.color = form.elements.color.value;
    userInfo.range = form.elements.range.value;
    userInfo.terms = form.elements.terms.value;

    console.log(userInfo);

}

form.addEventListener("submit",handleSubmit());