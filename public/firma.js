console.log("hello world");

const feedDisplay = document.querySelector(".feed");
console.log(feedDisplay);

async function getData() {
  const result = await fetch("http://localhost:3287/listings");
  const jsonResult = await result.json();

  printData(jsonResult);
}

getData();

function printData(jsonResult) {
  console.log(jsonResult);
  for (let i = 0; i < jsonResult.length; i++) {
    feedDisplay.innerHTML += `<p><a href="/firmaprofil.html?id=${jsonResult[i].title}">${jsonResult[i].title}</a></p>`;
  }
}
