
function includeJs (jsFilePath){	
  var js = document.createElement("script"); 
  js.type = "txt/javascript";
  js.src = jsFilePath;
  document.body.appendChild(js);
}
 includeJs("workPop.js");




  var target;
  var select;	
  var nowScrollTop = $(window).scrollTop();	
  var qScrollTop = ($("#section1").offset().top)/4;	
  var scrollTop1 = $("#section1").offset().top;	
  var scrollTop2 = $("#section2").offset().top;	
  var scrollTop3 = $("#section3").offset().top;	

$(function(){	

  
  console.log(scrollTop1);	
  console.log(scrollTop2);	
  console.log(scrollTop3);	
    activeMenuCheck();	



 $(function(){	
  $(window).scroll(function(){	
        nowScrollTop = $(window).scrollTop();	
        // console.log(nowScrollTop);	
        activeMenuCheck();	

      if($(window).scrollTop() > 400){	
          // console.log("ok");	
          $("#section0 p:nth-of-type(1)").css("animation-name", "textMotion1");	
      }	
  });	
});	






  //scrollTop (nav. top)-------------------------------------------------	

      //nav click	
       $(".nav li a").click(function() {	
           select = this.id.slice(4, 5);	
          $("html").animate({ scrollTop: $("#section"+select).offset().top },"slow");	

        });	

      //top click	
      $("#section3 .top a").click(function() {	
      $("html").animate({ scrollTop: 0 },"slow");	
      });	


      //logo click	
      $("header h1 a").click(function() {	
        $("html").animate({ scrollTop: 0 },"slow");	
        });	


      //arrow click	
      $("section .arrow a").click(function() {	
        console.log(this.id)	
        select = this.id.slice(5, 6);	
        console.log(select);	
        console.log($("#section"+(Number(select)+1)));	
        $("html").animate({ scrollTop: $("#section"+(Number(select)+1)).offset().top },"slow");	
        // $("html").animate({ scrollTop: $("#section"+(select+1)).offset().top },"slow");	
    });	











//menu bar	

  //menu over bar show	
    $(".nav li a").mouseover(function(){	
      $("#"+this.id).css("border-bottom","3px solid #555"); 	
    });	
    $(".nav li a").mouseout(function(){	
      $(this).css("border-bottom","3px solid transparent");	
      activeMenuCheck();	
    });	

    //active menu check	
       function activeMenuCheck(){	
      if(0<=nowScrollTop && nowScrollTop< scrollTop1){	
        $(".nav li a").css("border-bottom","3px solid transparent");	
        // console.log("section0");	
      }else if(scrollTop1 <= nowScrollTop && nowScrollTop<scrollTop2){	
        $(".nav li a").css("border-bottom","3px solid transparent");	
        $("#menu1").css("border-bottom","3px solid #555"); 	
        // console.log("section1");	

      }else if(scrollTop2<=nowScrollTop && nowScrollTop < (scrollTop2+(scrollTop1*1/2))){	
        $(".nav li a").css("border-bottom","3px solid transparent");	
        $("#menu2").css("border-bottom","3px solid #555"); 	
        // console.log("section2");	

      }else if((scrollTop2+(scrollTop1*1/2)) <= nowScrollTop){	
        $(".nav li a").css("border-bottom","3px solid transparent");	
        $("#menu3").css("border-bottom","3px solid #555"); 	
        // console.log("section3");	

      }	
    }	
    $(function(){	
      $(window).scroll(function(){	
            nowScrollTop = $(window).scrollTop();	
            // console.log(nowScrollTop);	
            activeMenuCheck();	
           if($(window).scrollTop() > 400){	
              // console.log("ok");	
              $("#section0 p:nth-of-type(1)").css("animation-name", "textMotion1");	
          }	
      });	
      $(document).ready(function(){	
        $(window).resize(function(){	
          console.log("resize");	
          location.reload();	
          $(".nav li").css("border-bottom","3px solid transparent");	
          nowScrollTop = $(window).scrollTop();	
           nowScrollTop = $(window).scrollTop();	
           qScrollTop = ($("#section1").offset().top)/4;	
           scrollTop1 = $("#section1").offset().top;	
           scrollTop2 = $("#section2").offset().top;	
           scrollTop3 = $("#section3").offset().top;	

       });	
      });	

  });	








//arrow. mouse over	
$(".arrow").mouseover(function(){	
$(this).find($(".arrow_u")).stop().animate({top:"48px"},300);	
$(this).find($(".scroll")).stop().css("margin-top","50px");	
});	

$(".arrow").mouseout(function(){	
   $(this).find($(".arrow_u")).stop().animate({top:"0px"},300);	
   $(this).find($(".scroll")).stop().css("margin-top","0px");	
   });	


})	






  
  
 
  // intro motion-------------------------------------------------	
  $(function(){	
    $(window).scroll(function(){	
  if($(window).scrollTop() > 400){	
            // console.log("ok");	
            $("#section0 p:nth-of-type(1)").css("animation-name", "textMotion1");	
        }	
    });	
  });	
  
  
 
