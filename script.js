const adviceID = document.querySelector(".adviceID");
const adviceText = document.querySelector(".adviceText");
const randomButton = document.querySelector("#randomButton");

async function getData() {
  return await fetch("https://api.adviceslip.com/advice")
    .then((response) => response.json())
    .then((data) => {
      adviceID.innerText = `ADVICE #${data.slip.id}`;
      adviceText.innerText = `"${data.slip.advice}"`;
    });
}

getData();

randomButton.addEventListener("click", async function () {
  await getData();
});
