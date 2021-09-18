import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready

  const ul = document.querySelector("ul");
  const URL = "https://pokeapi.co/api/v2/pokemon?limit=10"

  fetch(URL, {
    method: "GET",
    "Content-Type": "application/json"
  }).then(res => {
    if(res.status === 200)
    {
      return res.json();
    }
    else {
      throw new Error(`Can't get resources. Status: ${res.status}`);
    }
  }).then(res => {
    console.log(res)
  })
  .catch(err => {
    console.error(err.message)
  })

});
