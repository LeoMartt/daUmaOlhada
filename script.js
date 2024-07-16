var heart = document.querySelector('.heart'),
    reload = document.querySelector('.reload'),
    hearts = document.querySelector('.hearts'),
    allHearts = document.querySelectorAll('.hearts div'),
    heartAnime = document.querySelector('.heart.anime'),
    images = document.querySelectorAll('img.hidden'); // Seleciona as imagens ocultas

heart.addEventListener('click', animation);
reload.addEventListener('click', refresh);

function animation() {
   heart.classList.add("active");
   reload.setAttribute("style", "opacity: 1; cursor: pointer; pointer-events: auto;");
   heartAnime.style.opacity = "0";

   allHearts.forEach(function(element) {
      element.classList.add("active");
   });

   images.forEach(function(img) {
      img.classList.remove('hidden'); // Remove a classe 'hidden'
      img.classList.add("visible"); // Adiciona a classe 'visible'
   });
}

function refresh() {
   heart.classList.remove("active");
   reload.setAttribute("style", "opacity: 0; pointer-events: none;");
   heartAnime.style.opacity = "1";

   allHearts.forEach(function(element) {
      element.classList.remove("active");
   });

   images.forEach(function(img) {
      img.classList.remove("visible"); // Remove a classe 'visible'
      img.classList.add('hidden'); // Adiciona a classe 'hidden'
   });
}
