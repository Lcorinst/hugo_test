$('ul.dropdown-menu [data-toggle=dropdown]').on('click', function(event) {
  event.preventDefault(); 
  event.stopPropagation(); 
  $(this).parent().siblings().removeClass('open');
  $(this).parent().toggleClass('open');
});

if($("nav").width() > 1200){
  $('li.dropdown').mouseover(function() { 
    $(this).addClass('open'); }).mouseout(function() { 
      $(this).removeClass('open'); 
  });
  $('.dropdown-submenu').mouseover(function() { 
      $(this).addClass('open'); }).mouseout(function() {
        $(this).removeClass('open'); 
  });
}

//轮播循环
$('#myCarousel').carousel({
	interval: 5000
});

/*分页样式*/
$(".pagination>span").wrap("<li class='active'>");
$(".pagination>a").wrap("<li>");

$("img.lazy").lazyload();