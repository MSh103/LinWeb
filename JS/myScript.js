
const sideNav = document.getElementById("mySidenav");

// Function to set the sidebar width based on screen width
function setSidebarWidth() {

      sideNav.style.width = "350px";
      sideNav.style.textAlign = "left";
}

function openNav() {
  setSidebarWidth();
  window.addEventListener("resize", setSidebarWidth);
}
function closeNav() {
      sideNav.style.width = "0";
}
