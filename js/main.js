 
            
function change01(){ 
    document.getElementById("show-01").style.backgroundImage="url(images/word_bg_on.jpg)";
    document.getElementById("show-02").style.backgroundImage="url(images/word_bg.jpg)";
    document.getElementById("show-03").style.backgroundImage="url(images/word_bg.jpg)";                
} ; 
function change02(){  
    document.getElementById("show-01").style.backgroundImage="url(images/word_bg.jpg)";
    document.getElementById("show-02").style.backgroundImage="url(images/word_bg_on.jpg)";
    document.getElementById("show-03").style.backgroundImage="url(images/word_bg.jpg)";                
} ;
function change03(){  
    document.getElementById("show-01").style.backgroundImage="url(images/word_bg.jpg)";
    document.getElementById("show-02").style.backgroundImage="url(images/word_bg.jpg)";
    document.getElementById("show-03").style.backgroundImage="url(images/word_bg_on.jpg)";                
} ;

    $(document).ready(function(){  
                $("#show-01").mouseover(function(){
                    $("#show-01").click();  
                });
                
                $("#show-03").mouseover(function(){
                    $("#show-03").click();  
                });

                $("#show-02").mouseover(function(){
                    $("#show-02").click();  
                });


                $(".hu01").mouseover(function(){
                    $(".hu01").click();  
                });

                $(".hu02").mouseover(function(){
                    $(".hu02").click();  
                });

                $(".hu03").mouseover(function(){
                    $(".hu03").click();  
                });

                $(".hu04").mouseover(function(){
                    $(".hu04").click();  
                });
                
                
                
          }); 

		  
		 function icon01(){ 

		   document.getElementById("icon-01").src="images/icon_01_on.png";
			
		}; 

		function icon02(){ 
		   document.getElementById("icon-01").src="images/icon_01.png";
			
		};
		
		 function icon11(){ 

		   document.getElementById("icon-02").src="images/icon_02_on.png";
			
		}; 

		function icon12(){ 
		   document.getElementById("icon-02").src="images/icon_02.png";
			
		};
		
		 function icon21(){ 

		   document.getElementById("icon-03").src="images/icon_03_on.png";
			
		}; 

		function icon22(){ 
		   document.getElementById("icon-03").src="images/icon_03.png";
			
		};
		
		 function icon31(){ 

		   document.getElementById("icon-04").src="images/icon_04_on.png";
			
		}; 

		function icon32(){ 
		   document.getElementById("icon-04").src="images/icon_04.png";
			
		};
 
        window.onload = function () {  
            //获取图片  
            var p1 = document.getElementById("p1");  
  			var p2 = document.getElementById("p2"); 
  			var p3 = document.getElementById("p3");  
  			var p4 = document.getElementById("p4");
            var box01 = document.getElementById("icon-box"); 
            //鼠标经过图片  
            p1.onmouseover = function () {  
                this.src = "images/Perfection_bg.jpg"  
            }  
  			p2.onmouseover = function () {  
                this.src = "images/System_bg.jpg"  
            }
            p3.onmouseover = function () {  
                this.src = "images/Team_bg.jpg"  
            }  
  			p4.onmouseover = function () {  
                this.src = "images/Culture_bg.jpg"  
            }   
            //鼠标离开图片  
            p1.onmouseout = function () {  
                this.src = "images/Perfection-01.jpg";  
            }
            p2.onmouseout = function () {  
                this.src = "images/System-01.jpg";  
            } 
            p3.onmouseout = function () {  
                this.src = "images/Team-01.jpg";  
            }
            p4.onmouseout = function () {  
                this.src = "images/Culture-01.jpg";  
            }

            box01.onmouseover = function () {  
                this.firstChild.src = "images/icon_01_on.png";  
            } 

        }  

    $(document).ready(function(){  
                $("#obj01").mouseover(function(){
                    $("#obj01").addClass("box-shadow");
                });
                $("#obj01").mouseout(function(){
                    $("#obj01").removeClass("box-shadow");
                });
                $("#obj02").mouseover(function(){
                    $("#obj02").addClass("box-shadow");
                });
                $("#obj02").mouseout(function(){
                    $("#obj02").removeClass("box-shadow");
                });
                $("#obj03").mouseover(function(){
                    $("#obj03").addClass("box-shadow");
                });
                $("#obj03").mouseout(function(){
                    $("#obj03").removeClass("box-shadow");
                });
                $("#obj04").mouseover(function(){
                    $("#obj04").addClass("box-shadow01");
                });
                $("#obj04").mouseout(function(){
                    $("#obj04").removeClass("box-shadow01");
                });
                $("#obj05").mouseover(function(){
                    $("#obj05").addClass("box-shadow01");
                });
                $("#obj05").mouseout(function(){
                    $("#obj05").removeClass("box-shadow01");
                });
                 $("#obj06").mouseover(function(){
                    $("#obj06").addClass("box-shadow01");
                });
                $("#obj06").mouseout(function(){
                    $("#obj06").removeClass("box-shadow01");
                });
                $("#obj07").mouseover(function(){
                    $("#obj07").addClass("box-shadow01");
                });
                $("#obj07").mouseout(function(){
                    $("#obj07").removeClass("box-shadow01");
                });
                $("#obj08").mouseover(function(){
                    $("#obj08").addClass("box-shadow02");
                });
                $("#obj08").mouseout(function(){
                    $("#obj08").removeClass("box-shadow02");
                });
                $("#obj09").mouseover(function(){
                    $("#obj09").addClass("box-shadow02");
                });
                $("#obj09").mouseout(function(){
                    $("#obj09").removeClass("box-shadow02");
                });
                $("#obj10").mouseover(function(){
                    $("#obj10").addClass("box-shadow02");
                });
                $("#obj10").mouseout(function(){
                    $("#obj10").removeClass("box-shadow02");
                });
                $("#obj11").mouseover(function(){
                    $("#obj11").addClass("box-shadow02");
                });
                $("#obj11").mouseout(function(){
                    $("#obj11").removeClass("box-shadow02");
                });
          }); 

    $(document).ready(function(){  
                $("#obj01").mouseover(function(){
                    $("#tit01").addClass("text-blue");
                });
                $("#obj01").mouseout(function(){
                    $("#tit01").removeClass("text-blue");
                });
                $("#obj02").mouseover(function(){
                    $("#tit02").addClass("text-blue");
                });
                $("#obj02").mouseout(function(){
                    $("#tit02").removeClass("text-blue");
                });
                $("#obj03").mouseover(function(){
                    $("#tit03").addClass("text-blue");
                });
                $("#obj03").mouseout(function(){
                    $("#tit03").removeClass("text-blue");
                });
                $("#obj04").mouseover(function(){
                    $("#tit04").addClass("text-blue");
                });
                $("#obj04").mouseout(function(){
                    $("#tit04").removeClass("text-blue");
                });
                $("#obj05").mouseover(function(){
                    $("#tit05").addClass("text-blue");
                });
                $("#obj05").mouseout(function(){
                    $("#tit05").removeClass("text-blue");
                });
                $("#obj06").mouseover(function(){
                    $("#tit06").addClass("text-blue");
                });
                $("#obj06").mouseout(function(){
                    $("#tit06").removeClass("text-blue");
                });
                $("#obj07").mouseover(function(){
                    $("#tit07").addClass("text-blue");
                });
                $("#obj07").mouseout(function(){
                    $("#tit07").removeClass("text-blue");
                });
                $("#obj08").mouseover(function(){
                    $("#tit08").addClass("text-blue");
                });
                $("#obj08").mouseout(function(){
                    $("#tit08").removeClass("text-blue");
                });
                $("#obj09").mouseover(function(){
                    $("#tit09").addClass("text-blue");
                });
                $("#obj09").mouseout(function(){
                    $("#tit09").removeClass("text-blue");
                });
                $("#obj10").mouseover(function(){
                    $("#tit10").addClass("text-blue");
                });
                $("#obj10").mouseout(function(){
                    $("#tit10").removeClass("text-blue");
                });
                $("#obj11").mouseover(function(){
                    $("#tit11").addClass("text-blue");
                });
                $("#obj11").mouseout(function(){
                    $("#tit11").removeClass("text-blue");
                });
          });


