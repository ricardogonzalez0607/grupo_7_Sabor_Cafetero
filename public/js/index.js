const backs = document.querySelector('.slider')
const box = document.querySelectorAll('.box')
const nav = document.querySelector('nav')
console.log(box[0])
//box[0].style.backgroundImage = "url(https://elviajerofeliz.com/wp-content/uploads/2019/10/Que-ver-en-Medellin-_-10-Lugares-Imprescindibles.jpg)"
//nav.style.backgroundImage = 'none'

const change = (n, url) => {   
    box[n].onmouseover = () => {
        backs.style.backgroundImage = url//contenedor
    }
}

//setTimeout(change(0, "url(https://elviajerofeliz.com/wp-content/uploads/2019/10/Que-ver-en-Medellin-_-10-Lugares-Imprescindibles.jpg)"), 3000)
//setTimeout(change2(1), 3000)


change(0, "url(https://elviajerofeliz.com/wp-content/uploads/2019/10/Que-ver-en-Medellin-_-10-Lugares-Imprescindibles.jpg)")
change(1, "url(https://www.marnif.com/wp-content/uploads/2020/09/valle-del-cocora.jpg)")
change(2, "url(https://www.perfectdailygrind.com/wp-content/uploads/2017/01/IMG_2611.jpg")
change(3, "url(https://caldasecotravel.com/wp-content/uploads/2017/04/TOUR-CAFETERO-CALDAS-ECOTRAVEL-7.jpg)")

//carusel
 const carrusel = document.querySelector(".carrusel-items");

let maxScrollLeft = carrusel.scrollWidth - carrusel.clientWidth;
let intervalo = null;
let step = 1;
const start = () => {
  intervalo = setInterval(function () {
    carrusel.scrollLeft = carrusel.scrollLeft + step;
    if (carrusel.scrollLeft === maxScrollLeft) {
      step = step * -1;
    } else if (carrusel.scrollLeft === 0) {
      step = step * -1;
    }
  }, 10);
};

const stop = () => {
  clearInterval(intervalo);
};

carrusel.addEventListener("mouseover", () => {
  stop();
});

carrusel.addEventListener("mouseout", () => {
  start();
});

start(); 