$(document).ready(function () {

  setTimeout(function() {
    $(".alert.alert-success, .alert.alert-danger").fadeOut().empty();
  }, 5000);
  
  $(".alert.alert-success, .alert.alert-danger").on("click",function(){
    $(this).fadeOut();
   })

})

