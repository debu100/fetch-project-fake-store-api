const apiUrl = "https://fakestoreapi.com/products/";

async function handlePromise() {
  try {
    const respObj = await fetch(apiUrl);
    const jsonVal = await respObj.json();
    let data = "";
    jsonVal.map((el) => {
      data += `<div class="card">
        <h2 class="title">${el.title}</h2>
        <img src=${el.image} alt="" />
        <p class="des">${el.description}</p>
        <p class="cat">${el.category}</p>
        <p class="price">${el.price}</p>
      </div>`;
    });
    const cards = document.querySelector(".cards");
    cards.innerHTML = data; //? must use innerHTML as we are using html tags
  } catch (err) {
    console.log("Error here");
    alert("Something went wrong");
  }
}

handlePromise().catch((error) => {
  alert("Error");
});
