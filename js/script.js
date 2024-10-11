// TABS
const tabsBtns = document.querySelectorAll(".tabs-nav button");
// console.log(tabsBtns);
const tabsItems = document.querySelectorAll(".tabs-item");
// console.log(tabsItems);

// Ф.Я скрывает табы и уберает ACTIVE у кнопок
function hideTabs() {
    tabsItems.forEach(item => item.classList.add("hide"));
    tabsBtns.forEach(item => item.classList.remove("active"));
}
// Ф.Я показывает переданный номер таба и делает соответствующую кнопку активной
function showTab(index) {
    tabsItems[index].classList.remove("hide");
    tabsBtns[index].classList.add("active");
}
hideTabs();
showTab(0)

tabsBtns.forEach((btn, index) => btn.addEventListener("click", () => {
    hideTabs();
    showTab(index);
    }));


// ANCHORS
const anchors = document.querySelectorAll(".header__nav a");

anchors.forEach(anc => { 
    anc.addEventListener("click", function (event) {
        event.preventDefault();

        const id = anc.getAttribute("href");
        const elem = document.querySelector(id);

        window.scroll({
            top: elem.offsetTop - 60,behavior: "smooth"
        })
    });
});