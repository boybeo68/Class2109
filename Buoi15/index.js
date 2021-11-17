let tagH1 = document.getElementById("idH1");
let tagP = document.getElementsByTagName("p");
let example = document.getElementsByClassName("example");

tagH1.style.color = "red";
for (let index = 0; index < tagP.length; index++) {
  tagP[index].style.color = "blue";
}
example[1].style.color = "green";

example[1].innerHTML = " <span style='color: blueviolet'>Data span</span>";
example[2].innerText = " <span style='color: blueviolet'>Data span</span>";
// queryselector

let tagH3 = document.querySelector("p");
let tagH3All = document.querySelectorAll("p");
let ClassExample = document.querySelectorAll("div .example");
let idExample = document.querySelector("#idH1");
console.log(idExample);

let buttonClick = document.querySelector("#clickButton");
buttonClick.onclick = () => {
  alert("tét");
};
function myFunction() {
  alert("click from html");
}
let data = "tung";
let listTask = ["new task", "task 2"];
// localStorage.setItem("meyKey", "Data cua Tung");
// localStorage.setItem("meyKey2", "Data cua Tung test");
localStorage.setItem("newTask", JSON.stringify(listTask));
let getlistTask = localStorage.getItem("newTask");
// let getData = localStorage.getItem("meyKey2");
console.log(JSON.parse(getlistTask));

// Dùng 3 cái: selector, event, localstorage 