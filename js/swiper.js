jquery.scrollToGiveClass.jsjQuery(document).ready(function(){

    /* #best_section 아이템 슬라이드 */ 
    var bestSwiper = new Swiper("#best_swiper", {
        loop : true,
        slidesPerView : 'auto',
        spaceBetween : 1,
        speed: 700,
        centeredSlides : true,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false
          },

        pagination: {
          el: ".best_pager",
          type: "progressbar",
        },
        breakpoints : {
          768 : {
            centeredSlides : false,
            spaceBetween : 33,
          }
        }
      });
      
      /* #perfum_section 아이템 슬라이드 */ 
      var perfumeSwiper = new Swiper("#perfume_swiper", {
        loop : true,
        slidesPerView : 'auto',
        spaceBetween : 1,
        speed: 700,
        centeredSlides : true,
        autoplay: {
            delay: 3500,
            disableOnInteraction: false
          },

        pagination: {
          el: ".perfume_pager",
          type: "progressbar",
        },
        breakpoints : {
          768 : {
            centeredSlides : false,
            spaceBetween : 33,
          }
        }
      });
});