const feedDisplay = document.querySelector(".feed");

let urlPost = window.location.search;
const urlParams = new URLSearchParams(urlPost);
let urlID = urlParams.get("id");

async function getData() {
  const result = await fetch("http://localhost:3287/listings/" + urlID);
  const jsonResult = await result.json();
  printData(jsonResult);
}

getData();

function printData(jsonResult) {
  console.log(jsonResult);

  feedDisplay.innerHTML = `<p><h1>${jsonResult[0].title}</h1></p>`;
}
