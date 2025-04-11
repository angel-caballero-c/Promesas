const main = document.getElementById("main").item(0);
let mainProds = document.getElementById("mainProds");
const URLMain = "https://fakestoreapi.com/products";

function getData(){
    const options = {"method": "GET"}
    fetch(URLMain, options)
    .then((response) => {
        console.log(response);
        response.json().then((res)=> {
            createCards(res)
        });
    })
    .catch((err) => {
        main.insertAdjacentHTML("beforeend",
            `<div class="alert alert-danger" role="alert">
            ${err.message}
            </div>`);
    });
} // getData

getData();