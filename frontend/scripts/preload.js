// Sayfa tamamen yüklendiğinde çalışır
window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");
  const mainContent = document.getElementById("main-content");

  // Yüklenme ekranını gizle
  preloader.style.display = "none";

  // Gerçek içeriği göster
  mainContent.style.display = "block";
});
