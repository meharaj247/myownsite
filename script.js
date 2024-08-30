document.addEventListener("DOMContentLoaded", function() {
    console.log("Welcome to Meharaj Banu's Portfolio!");
});

<script>
$(document).ready(function(){
  $(".nav-link").click(function(){
    var target = $(this).attr("digitalllearning");
    $("html, body").animate({
      scrollTop: $(target).offset().top
    }, 800);
  });
});
</script>

