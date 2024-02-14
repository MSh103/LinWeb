function redirectMobileHandler() {
    const width = Math.max(document.clientWidth || 0, window.innerWidth || 0);
    if(width > 1200) {
      window.location = './home.html';
    }
  }
  
  window.onload = redirectMobileHandler();
  window.onresize = () => redirectMobileHandler();