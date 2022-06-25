jQuery(document).ready(function(){

  /* 헤더 800px 이후 고정 */ 
  $('#header_inner').scrollToGiveClass({
    class: 'header_fix',
    baseline: 800
  });
  
  /* 모바일 카테고리 아코디언 */
   $(".sub_title").click(function(){
    var btn = $(this);
    var sub = btn.siblings(".menu");

    $(".menu").not(sub).slideUp();
    sub.slideToggle();

    $(".sub_title").not(btn).removeClass("active")
    btn.toggleClass("active");
   });

  /* 모바일 카테고리 */
  $(".category_m").click(function(){
    $(".category_box").toggleClass("open");
    $(this).toggleClass("close_btn")
  });  

  var scrollA = $("#aroma_section");
  var $offset = 200;
  var scrollAOST = scrollA.offset().top - $offset;

  $(window).scroll(function(){
      if($(this).scrollTop() > scrollAOST)
      scrollA.find(".aroma_wrap").addClass("animate");
  });

  var scrollW = $(".wood_inner");
  var $offset = 300;
  var scrollWOST = scrollW.offset().top - $offset;

  $(window).scroll(function(){
      if($(this).scrollTop() > scrollWOST)
      scrollW.find(".box1").addClass("animate");
  });

  var scrollWW = $(".wood_inner");
  var $offset = 100;
  var scrollWWOST = scrollWW.offset().top - $offset;

  $(window).scroll(function(){
      if($(this).scrollTop() > scrollWWOST)
      scrollWW.find(".box2").addClass("animate");
  });

  /* swiper 슬라이드 */ 
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