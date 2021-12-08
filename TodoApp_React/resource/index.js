// selector tất cả element
const inpuBox = document.querySelector(".inputField input");
const addBtn = document.querySelector(".inputField button");
const todoList = document.querySelector(".todoList");
const deleteAllBtn = document.querySelector(".footer button");
const pendingTaskNum = document.querySelector(".pendingTask");

inpuBox.onkeyup = () => {
  let userEnterValue = inpuBox.value;
  if (userEnterValue.trim() != 0) {
    addBtn.classList.add("active");
  } else {
    addBtn.classList.remove("active");
  }
};
showTask();
addBtn.onclick = () => {
  // khi user gõ vào bàn phím
  let userEnterValue = inpuBox.value;
  // láy dữ liệu từ localstorage
  let getLocalStorage = localStorage.getItem("Newtodo");
  if (getLocalStorage == null) {
    // nếu không có dữ liệu trong local
    listArray = [];
  } else {
    listArray = JSON.parse(getLocalStorage); //  nếu  có dữ liệu trong local
  }

  listArray.push(userEnterValue);
  console.log(listArray);
  localStorage.setItem("Newtodo", JSON.stringify(listArray));
  showTask();
  addBtn.classList.remove("active");
};

function showTask() {
  let getLocalStorage = localStorage.getItem("Newtodo");
  if (getLocalStorage == null) {
    // nếu không có dữ liệu trong local
    listArray = [];
  } else {
    listArray = JSON.parse(getLocalStorage); //  nếu  có dữ liệu trong local
  }

  pendingTaskNum.textContent = listArray.length; // tống số task = giá trị của mảng
  console.log(listArray);
  let newLiTask = "";
  listArray.forEach((element, index) => {
    newLiTask += `<li>
    ${element}
    <span onclick="deleteTask(${index})" class="icon"><i class="fas fa-trash"></i></span>
  </li>`;
  });
  todoList.innerHTML = newLiTask;
  inpuBox.value = "";
}

function deleteTask(index) {
  let getLocalStorage = localStorage.getItem("Newtodo");
  listArray = JSON.parse(getLocalStorage);
  listArray.splice(index, 1); // delete item
  localStorage.setItem("Newtodo", JSON.stringify(listArray));
  showTask();
}

deleteAllBtn.onclick = () => {
  let getLocalStorage = localStorage.getItem("Newtodo");
  listArray = JSON.parse(getLocalStorage);
  listArray = [];
  localStorage.setItem("Newtodo", JSON.stringify(listArray));
  showTask();
};