let lastScrollTop = 0; // variável para guardar a posição anterior do scroll

window.addEventListener("scroll", function() {
  var currentScroll = window.pageYOffset || document.documentElement.scrollTop;
  if (currentScroll > lastScrollTop) {
    // Rola para baixo
    document.getElementById("navbar").style.top = "-60px"; // ajuste este valor com base na altura do seu menu
  } else {
    // Rola para cima
    document.getElementById("navbar").style.top = "0";
  }
  lastScrollTop = currentScroll;
});