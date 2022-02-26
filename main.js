$('.slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '<span class="prev_arrow"><i class="fa-solid fa-angle-left"></i></span>',
    nextArrow: '<span class="next_arrow"><i class="fa-solid fa-angle-right"></i></span>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

//Таймер обратного отсчёта
const staringMinutes = 30;
let time = staringMinutes * 60;

const timer = document.querySelector('.timer');

setInterval(updateCountDown, 1000);

function updateCountDown(){
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;

    seconds = seconds < 10 ? '0' + seconds : seconds;

    timer.innerHTML = `${minutes} : ${seconds}`;

    time--;
}

