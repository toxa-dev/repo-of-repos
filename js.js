const matches = document.querySelectorAll("ul");
const btnLayout = document.querySelector(".btn-layout-change");


btnLayout.addEventListener("click", () => {
    matches.forEach(match => {
        match.classList.toggle("layout-vertical");
    });
})