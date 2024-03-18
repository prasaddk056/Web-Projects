
const tabOne = document.querySelector(".html");
const tabTwo = document.querySelector(".css");
const tabThree = document.querySelector(".js");
const body = document.body;
const item = document.querySelectorAll(".item");
const icon = document.querySelector(".big-icon");
const active = document.querySelector(".active")

// Function to set tab and body colors
function setColors(tab, bgColor, iconClass, infoColor) {
    body.style.backgroundColor = bgColor;
    icon.innerHTML = `<i class="${iconClass}"></i>`;
    for (let i = 0; i < item.length; i++) {
      item[i].style.color = infoColor;
    }
  }
  


tabOne.addEventListener("click",()=>{
    setColors(tabOne,"orange","fa-brands fa-html5","orange");
    tabOne.classList.add("tabOne");
    tabTwo.classList.remove("tabOne");
    tabThree.classList.remove("tabOne");
})

tabTwo.addEventListener("click",()=>{
    setColors(tabTwo,"blue","fa-brands fa-css3-alt","blue");
    tabTwo.classList.add("tabOne");
    tabOne.classList.remove("tabOne");
    tabThree.classList.remove("tabOne");
})

tabThree.addEventListener("click",()=>{
    setColors(tabThree,"yellow","fa-brands fa-js","yellow");
    tabThree.classList.add("tabOne");
    tabTwo.classList.remove("tabOne");
    tabOne.classList.remove("tabOne");
})
    

setColors(tabOne,"orange","fa-brands fa-html5","orange");
tabOne.classList.add("tabOne");

