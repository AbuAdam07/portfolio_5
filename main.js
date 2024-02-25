const map = document.querySelector(".map"),
  status = document.querySelector(".status");

window.addEventListener('DOMContentLoaded', () => {
  findLocation();
});

function findLocation() {
  if (!navigator.geolocation) {
    status.textContent = 'Ваш браузер не дружит с геолокацией...';
  } else {
    navigator.geolocation.getCurrentPosition(success, error);
  }

  function success(position) {  // если всё хорошо, собираем ссылку
    const { longitude, latitude } = position.coords;
    map.src = `https://www.openstreetmap.org/export/embed.html?bbox=${longitude}%2C${latitude}&amp;layer=mapnik`;
  }

  function error() { // если всё плохо, просто напишем об этом
    status.textContent = 'Я тебе всё равно найду!:0';
  }
}