console.log("Hello from src/index.js!");

const countries = document.querySelectorAll("#fifa-wins li");

console.log(countries);

const list = document.querySelector('#fifa-wins');
const body = document.querySelector(".body");

document.querySelectorAll("img").forEach((img) => {
  img.addEventListener("mouseover", (event) => {
    event.currentTarget.classList.add("img-circle");
    alert("Hello! click on me");
  });
  img.addEventListener("mouseout", (event) => {
    event.currentTarget.classList.remove("img-circle");
    
  });
  // body.addEventListener("mouseout", (event) => {
  //   alert("Don't leave me");
  // });
});

// setTimeout(() => {  
//   list.insertAdjacentHTML('beforebegin', 'beforebegin');
//   list.insertAdjacentHTML('afterbegin', 'afterbegin');
//   list.insertAdjacentHTML('beforeend', 'beforeend');
//   list.insertAdjacentHTML('afterend', 'afterend');
//   list.style.display = "none";
// }, 5000);

