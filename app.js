"use strict";
console.log("hello");
document.querySelector("body").style.background = "pink";
const getJoke = async () => {
  const config = { headers: { Accept: "application/json" } };
  const res = await axios.get("https://icanhazdadjoke.com", config);
  return res.data.joke;
};
document.body.addEventListener("click", async () => {
  const newli = document.createElement("li");
  newli.innerText = await getJoke();
  newli.style.background = "red";
  document.querySelector(".list").append(newli);
});
const ul = document.querySelector(" list");
ul.addEventListener("click", (e) => {
  e.target.remove();
  event.stopPropagation();
});
