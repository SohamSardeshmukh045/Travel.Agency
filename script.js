const modal = document.getElementById('loginModal');
const loginBtn = document.getElementById('loginBtn');
const closeBtn = document.getElementsByClassName('close')[0];

loginBtn.onclick = function() {
    modal.style.display = "block";
}

closeBtn.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}
const destinationSwiper = new Swiper('.destination-slider', {
    slidesPerView: 3,   
    spaceBetween: 20,  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      768: {
        slidesPerView: 1,  
      },
      1024: {
        slidesPerView: 2,  
      },
    }
  });
  const packageSwiper = new Swiper('.package-slider', {
    slidesPerView: 3,  
    spaceBetween: 20,    
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      768: {
        slidesPerView: 1,  
      },
      1024: {
        slidesPerView: 2,  
      },
    }
  });
  