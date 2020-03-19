//scroll animation
    

    $.fn.jQuerySimpleCounter = function( options ) {
	    var settings = $.extend({
	        start:  0,
	        end:    100,
	        easing: 'swing',
	        duration: 400,
	        complete: ''
	    }, options );

	    var thisElement = $(this);

	    $({count: settings.start}).animate({count: settings.end}, {
			duration: settings.duration,
			easing: settings.easing,
			step: function() {
				var mathCount = Math.ceil(this.count);
				thisElement.text(mathCount);
			},
			complete: settings.complete
		});
	};


$('#number1').jQuerySimpleCounter({end: 12,duration: 3000});
$('#number2').jQuerySimpleCounter({end: 55,duration: 3000});
$('#number3').jQuerySimpleCounter({end: 359,duration: 2000});
$('#number4').jQuerySimpleCounter({end: 246,duration: 2500});

//collap btn$(document).ready(function(){


    $(document).ready(function(){
        $(".rowfifth .col-sm-6 .inner4 .co1").click(function(){
          $(".sp1").css("display","block");
          $(".co1").css("display","none");
          $(".cos1").css("display","block");
        });
      });

      $(document).ready(function(){
        $(".rowfifth .col-sm-6 .inner4 .co2").click(function(){
          $(".sp2").css("display","block");
          $(".co2").css("display","none");
          $(".cos2").css("display","block");
        });
      });

      $(document).ready(function(){
        $(".rowfifth .col-sm-6 .inner4 .co3").click(function(){
          $(".sp3").css("display","block");
          $(".co3").css("display","none");
          $(".cos3").css("display","block");
        });
      });

      $(document).ready(function(){
        $(".rowfifth .col-sm-6 .inner4 .sec").click(function(){
          $(".inner5").css("display","none");
          $(".collap-btn").css("display","block");
          $(".sec").css("display","none");
        });
      });


      //scroll function navabr
      $(window).scroll(function() {
      $(".first-section nav .nav-first-div").css("display","none");
      $(".first-section nav .logo").css("visibility","hidden");
      $(".first-section nav .nav-second-div").css({"width":"100%","background":"white","position":"fixed","margin-left":"0%","transition":"1s"});
      var $a=$(window).scrollTop();
      if($a==0){
        $(".first-section nav .nav-first-div").css("display","flex");
        $(".first-section nav .logo").css("visibility","visible");
        $(".first-section nav .nav-second-div").css({"width":"80%","background":"none","position":"initial","margin-left":"20%"});
    
      }

    });
      
    //menu bar
    $(document).ready(function(){
      $(".tabula-main-container .first-section nav .nav-second-div .nav-second-div-in1 .fa-bars").click(function(){
       
        $(".sidebar").css("display","block");
        
        $(".fa-bars").css("display","none");
        $(".small-logo").css("display","none");
        $("html").animate({ scrollTop: 0 }, "slow");
      });
    });

    //close bar
    $(document).ready(function(){
      $(".tabula-main-container .sidebar .inner ul li .fa-times").click(function(){
       
        $(".sidebar").css("display","none");
        $(".fa-bars").css("display","block");
        $(".small-logo").css("display","block");
      });
    });