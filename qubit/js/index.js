const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    breakpoints: {
        // when window width is >= 320px
        320: {
         slidesPerView: 1,
         spaceBetween: 20
        },
        // when window width is >= 480px
        576: {
         slidesPerView: 2,
         spaceBetween: 20
        },
        // when window width is >= 640px
        992: {
         slidesPerView: 3,
         spaceBetween: 30
        }
       },
    
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
 
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });

