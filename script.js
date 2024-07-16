document.addEventListener("DOMContentLoaded", function() {
  var heart = document.querySelector('.heart'),
      reload = document.querySelector('.reload'),
      hearts = document.querySelector('.hearts'),
      allHearts = document.querySelectorAll('.hearts div'),
      heartAnime = document.querySelector('.heart.anime');

  heart.addEventListener('click', animation);
  reload.addEventListener('click', refresh);

  function animation() {
    heart.classList.add("active");
    reload.style.opacity = "1";
    reload.style.cursor = "pointer";
    reload.style.pointerEvents = "auto";
    heartAnime.style.opacity = "0";

    allHearts.forEach(function(element) {
      element.classList.add("active");
    });

    var images = document.querySelectorAll('img.hidden'); // Re-seleciona as imagens
    images.forEach(function(img) {
      img.classList.remove('hidden');
      img.classList.add("visible");
    });
  }

  function refresh() {
    heart.classList.remove("active");
    reload.style.opacity = "0";
    reload.style.pointerEvents = "none";
    heartAnime.style.opacity = "1";

    allHearts.forEach(function(element) {
      element.classList.remove("active");
    });

    var images = document.querySelectorAll('img.visible'); // Re-seleciona as imagens visíveis
    images.forEach(function(img) {
      img.classList.remove("visible");
      img.classList.add('hidden');
    });
  }
});
