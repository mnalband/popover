const popoverButton = document.querySelector(".popover-button");
const popoverTip = document.querySelector(".popover-tip");

popoverButton.addEventListener("click", () => {
  popoverTip.classList.toggle("invisible");
});
