$(document).ready(function() {
  $("form#userLuck").submit(function(event) {
    event.preventDefault();
    $("input:checkbox[name=luck]:checked").each(function() {
      const luckMeter = $(this).val();
      console.log(luckMeter);
  
    });
  });
});