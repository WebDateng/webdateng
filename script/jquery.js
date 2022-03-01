$(document).ready(function(){
  // Image Card Scale Hover
  $(".card img").mouseenter(function(){
    $(this).css("transform","scale(1.09)")
  });
  $(".card img").mouseleave(function(){
    $(this).css("transform","scale(1)")
  });

  // Laptop Scale Hover
  $(".mockup img").mouseenter(function(){
    $(this).css("transform","scale(1.2)")
  });
  $(".mockup img").mouseleave(function(){
    $(this).css("transform","scale(1)")
  });

  // Caption Tombol Wa
  $(".wa").mouseenter(function(){
    $(".desc-wa").show(300);
  });
  $(".wa").mouseleave(function(){
    $(".desc-wa").hide(150);
  });

});