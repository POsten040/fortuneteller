$(document).ready(function() {
  $("form#userLuck").submit(function(event) {
    // let int 
    // let luckMeter = 0;
    let total = 0

    event.preventDefault();
    $("input:checkbox[name=luck]:checked").each(function() {
      let int 
      let luckMeter = 0;
      
      int = $(this).val();
      luckMeter = parseInt(int);
      total += luckMeter;
    });
    console.log(total);
    if(total < -2){
      $("#badLuck").show()
    } else if(total > -2 && total < 2){
      $("#noLuck").show()
    } else if (total > 2){
      $("#goodLuck").show()
    }
  });
});