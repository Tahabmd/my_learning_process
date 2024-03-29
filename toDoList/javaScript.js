document.cookie = "key=value; HttpOnly";
setInterval(levels, 10);
let button = document.querySelector("button");
let article = document.querySelector("#article-input");
let addingArticle = document.querySelector("#adding-list");
let rightPanel = document.querySelector(".right-panel");
let main = document.querySelector("main");
let panelBtn = document.querySelector("#info-panel-button");
let panelDiv = document.getElementById("panel");
let mainTasks, rightPanelTasks;
if (localStorage.getItem("userTask")) {
  mainTasks = loadTaskFromMain();
} else {
  mainTasks = [];
}
if (localStorage.getItem("taskDone")) {
  rightPanelTasks = loadTaskFromRightPanel();
} else {
  rightPanelTasks = [];
}
panelBtn.addEventListener("click", () => {
  if (panelDiv.style.maxHeight) {
    panelDiv.style.maxHeight = null;
  } else {
    panelDiv.style.maxHeight = panelDiv.scrollHeight + 50 + "px";
  }
  panelDiv.classList.toggle("show-the-div-panel");
});
button.addEventListener("click", addToList);
rightPanel.addEventListener("dblclick", (e) => {
  if (e.target.localName === "section") {
    let targetedSection = e.target;
    addingArticle.appendChild(targetedSection);
    let taskToRemove = targetedSection.firstElementChild.innerHTML;
    let indexOfTask = rightPanelTasks.indexOf(taskToRemove);
    removeTaskFromRightPanel(indexOfTask);
    saveTasksFromMain(taskToRemove);
  }
});
main.addEventListener("dblclick", (e) => {
  // adding dblclick to remove the section to the right panel
  if (e.target.localName === "section") {
    let targetedSection = e.target;
    rightPanel.appendChild(targetedSection);
    let task = targetedSection.firstElementChild.innerHTML;
    let indexOfTask = mainTasks.indexOf(task);
    removeTaskFromMain(indexOfTask);
    saveTasksFromRightPanel(task);
  }
});
window.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    addToList(); // even works with pressing enter
  }
});

window.addEventListener("click", (e) => {
  if (e.target.localName === "i") {
    let parent = e.target.parentNode; //parent node of the icon for deletion
    let taskToRemove = e.target.previousElementSibling.innerHTML;
    let mainTaskIndex = mainTasks.indexOf(taskToRemove);
    let rightPanelTaskIndex = rightPanelTasks.indexOf(taskToRemove);
    removeTaskFromMain(mainTaskIndex);
    removeTaskFromRightPanel(rightPanelTaskIndex);
    parent.outerHTML = "";
  }
});
document.addEventListener("DOMContentLoaded", () => {
  for (const task of mainTasks) {
    let section = document.createElement("section");
    section.innerHTML = `
    <h3>${encodeHTML(task)}</h3>
    <i class="fa-solid fa-trash-can"></i>`;
    addingArticle.appendChild(section);
  }
  for (const task of rightPanelTasks) {
    let section = document.createElement("section");
    section.innerHTML = `
    <h3>${encodeHTML(task)}</h3>
    <i class="fa-solid fa-trash-can"></i>`;
    rightPanel.appendChild(section);
  }
});

function addToList() {
  //creates the section that contains the title of the todo
  let input = document.querySelector("input[type=text]");
  let section = document.createElement("section");
  try {
    if (input.value.trim() === "") throw "Enter your title...";
    section.innerHTML = `
    <h3>${encodeHTML(input.value)}</h3>
    <i class="fa-solid fa-trash-can"></i>`;
    addingArticle.appendChild(section);
    saveTasksFromMain(input.value);
    input.value = "";
  } catch (err) {
    alert(err);
  }
}
function encodeHTML(str) {
  // this encode prevent the xss attack
  return str.replace(/[&<>"'`=\/]/g, function (char) {
    return {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
      "/": "&#x2F;",
      "`": "&#x60;",
      "=": "&#x3D;",
    }[char];
  });
}

function levels() {
  // level of tasks
  let lvl = {
    1: "you've done nothing...",
    2: "Here we go!",
    3: "keep going",
    4: "the day is yours",
    5: "Great!",
    6: "Good job!",
    7: "you killing it",
    8: "Fantastic!",
  };
  let count = rightPanel.childElementCount;
  let h2 = rightPanel.firstElementChild;

  for (let number in lvl) {
    if (count == number) {
      h2.innerHTML = lvl[number];
    }
  }
}
function saveTasksFromMain(input) {
  mainTasks.push(input);
  localStorage.setItem("userTask", mainTasks);
}
function loadTaskFromMain() {
  return localStorage.getItem("userTask").split(",");
}
function removeTaskFromMain(taskIndex) {
  if (taskIndex !== -1) {
    mainTasks.splice(taskIndex, 1);
    localStorage.setItem("userTask", mainTasks);
  }
}
function saveTasksFromRightPanel(input) {
  rightPanelTasks.push(input);
  localStorage.setItem("taskDone", rightPanelTasks);
}
function loadTaskFromRightPanel() {
  return localStorage.getItem("taskDone").split(",");
}
function removeTaskFromRightPanel(taskIndex) {
  if (taskIndex !== -1) {
    rightPanelTasks.splice(taskIndex, 1);
    localStorage.setItem("taskDone", rightPanelTasks);
  }
}
