$(document).ready(function() {
  $(".show").click(function() {
    $(".card-hide").toggle();
  });
  $(".show1").click(function() {
    $(".card-hide1").toggle();
  });
  $(".show2").click(function() {
    $(".card-hide2").toggle();
  });


  // $(".work1").mouseover(function(){
  //   $(".work1a").show();

  // }).mouseout(function(){
  //   $(".work1a").hide();
  // })

  $(function(){
    $(".work1").mouseover(function(){
      $(".work1a").show();
    }).mouseleave(function() {
      $(".work1a").hide();
    })
  })

  $(function(){
    $(".work2").mouseover(function(){
      $(".work2a").show();
    }).mouseleave(function() {
      $(".work2a").hide();
    })
  })

  $(function(){
    $(".work3").mouseover(function(){
      $(".work3a").show();
    }).mouseleave(function() {
      $(".work3a").hide();
    })
  })

  $(function(){
    $(".work4").mouseover(function(){
      $(".work4a").show();
    }).mouseleave(function() {
      $(".work4a").hide();
    })
  })

  $(function(){
    $(".work5").mouseover(function(){
      $(".work5a").show();
    }).mouseleave(function() {
      $(".work5a").hide();
    })
  })

  $(function(){
    $(".work6").mouseover(function(){
      $(".work6a").show();
    }).mouseleave(function() {
      $(".work6a").hide();
    })
  })

  $(function(){
    $(".work7").mouseover(function(){
      $(".work7a").show();
    }).mouseleave(function() {
      $(".work7a").hide();
    })
  })

  $(function(){
    $(".work8").mouseover(function(){
      $(".work8a").show();
    }).mouseleave(function() {
      $(".work8a").hide();
    })
  })


  $("form#contact-form").on("submit", function(event) {
    event.preventDefault();
    var name = $("input#form_name").val();
    var enail= $("input#form_email").val();
    var message = $("input#form_message").val();
    var result = ("Hello " + name + " we received your message. Thank you for reaching to us well get back soon");

    $("#output").text(result);

    // if($("input#form_name").val() && $("input#form_email").val() && $("input#form_message").val() ){
    //   alert("Hello" + name + "Thanks for reaching, we'll reach out to you soon! ");
    // }
    // else if ($("input#form_name").val() && $("input#form_email").val() ){
    //   alert("Kindly leave a message");
    // }

  });



  });

