const videos = document.querySelectorAll(".my-video");
const playButtons = document.querySelectorAll(".play-button");

playButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    videos[index].play();
    button.style.display = "none";
    videos[index].setAttribute('controls', 'true');
  });
});
