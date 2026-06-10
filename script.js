const toggle = document.getElementById("theme-toggle");

toggle.addEventListener("click", () => {
if (document.body.dataset.theme === "dark") {
document.body.dataset.theme = "";
} else {
document.body.dataset.theme = "dark";
}
});
