const openBTNTransport = document.getElementById("openTransport");
const openBTNOptimalisering = document.getElementById("openOptimalisering");
const openBTNLøsninger = document.getElementById("openLøsninger");
const modalTransport = document.getElementById("transport");
const modalOptimalisering = document.getElementById("optimalisering");
const modalLøsninger = document.getElementById("løsninger");
const closeBTNTransport = document.getElementById("closeTransport");
const closeBTNOptimalisering = document.getElementById("closeOptimalisering");
const closeBTNLøsninger = document.getElementById("closeLøsninger");
const openLogin = document.getElementById("openLogin");
const modalLogin = document.getElementById("login");
const closeLogin = document.getElementById("closeLogin");

if (openLogin) {
  openLogin.addEventListener("click", () => {
    modalLogin.classList.add("open");
  });
}

if (closeLogin) {
  closeLogin.addEventListener("click", () => {
    modalLogin.classList.remove("open");
  });
}

if (openBTNTransport) {
  openBTNTransport.addEventListener("click", () => {
    modalTransport.classList.add("open");
  });
}

if (openBTNOptimalisering) {
  openBTNOptimalisering.addEventListener("click", () => {
    modalOptimalisering.classList.add("open");
  });
}

if (openBTNLøsninger) {
  openBTNLøsninger.addEventListener("click", () => {
    modalLøsninger.classList.add("open");
  });
}

if (closeBTNTransport) {
  closeBTNTransport.addEventListener("click", () => {
    modalTransport.classList.remove("open");
  });
}

if (closeBTNOptimalisering) {
  closeBTNOptimalisering.addEventListener("click", () => {
    modalOptimalisering.classList.remove("open");
  });
}

if (closeBTNLøsninger) {
  closeBTNLøsninger.addEventListener("click", () => {
    modalLøsninger.classList.remove("open");
  });
}
