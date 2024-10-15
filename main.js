// Function to open the sidebar
function clickIcon() {
  const toolPar = document.querySelector(".tool-par");
  toolPar.style.left = "0px";
  toolPar.style.display = "block";
}

// Function to close the sidebar
function closeIcon() {
  const toolPar = document.querySelector(".tool-par");
  toolPar.style.left = "-100%";
}

// Add event listener to the close button
document.querySelector(".close-btn").addEventListener("click", closeIcon);

// Close the sidebar when clicking outside of it
document.addEventListener("click", function (event) {
  const toolPar = document.querySelector(".tool-par");
  const icon = document.querySelector(".icon");

  // Check if the click target is outside the sidebar and the icon
  if (!toolPar.contains(event.target) && !icon.contains(event.target)) {
    closeIcon();
  }
});
