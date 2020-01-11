
  //work popup	
  function clickAfter (){
    select = target.id.slice(4, 5);	
    console.log("clickAfter");	
     $("#popUp"+select).fadeIn(200);
     return select;
  }

  $("#section1 #workList li").click(function(e) {	
    e.preventDefault();
    target = this;
    clickAfter ();
  });	

  
  //work popup close	
  $("#section1 .popupClose").click(function(e){
    e.preventDefault();
    $("#popUp"+select).fadeOut(200);
  });	 
  $("#section1 .workPopup_bg").click(function(e){
    e.preventDefault();
    $("#popUp"+select).fadeOut(200);
  });	
  
  
  
  
  //work pop up slide	
  $(function () {	
    var currentNum = 0;	
    var totalNum = $(".picSet").children(".iimg").length;	
    var index = 100;	
    var count = 0;	
    var myAuto;	
    console.log(currentNum);	
    console.log(totalNum);	
    // console.log($(".picSet").children(".iimg").length);	
  
    // 스크립트로 버튼 생성	
    for (var i = 0; i < totalNum; i++) {	
        // console.log(i);	
    $(".btnBox").append('<button id="btn' + i + '" class="btn"></button>');	
    }	
    $(".gallery").prepend('<button class="prev_btn" class="pn_btn">&lt;</button>');	
    $(".gallery").append('<button class="next_btn" class="pn_btn">&gt;</button>');	
  
    function picView() {	
        // console.log(currentNum); // 2	
        // 초기화	
        count = 0;	
        $(".btn").css("background-color", "gray");	
        $(".btn").css("color", "black");	
        // 보여지는 그림	
        index++;	
        $("#pic" + currentNum).css("display", "none")	
        $("#pic" + currentNum).css("z-index", index);	
        $("#pic" + currentNum).fadeIn();	
        $("#btn" + currentNum).css("background-color", "orangered");	
        $("#btn" + currentNum).css("color", "white");	
    }	
    // 버튼 제어	
    $(".prev_btn").click(function () {	
        if (currentNum == 0) {	
            currentNum = totalNum;	
        } else {	
            currentNum--;	
        }	
        picView();	
    });	
    $(".next_btn").click(function () {	
        if (currentNum == totalNum) {	
            currentNum = 0;	
        } else {	
            currentNum++;	
        }	
        picView();	
    });	
    $(".btn").click(function () {	
        currentNum = this.id.substr(3, 4);	
        picView();	
    });	
  
  
     picView();	
    $(".iimg").css("display", "none");	
    $("#pic" + currentNum).fadeIn();	
  });	
  








 