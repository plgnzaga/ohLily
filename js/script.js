$(document).ready(function(){
                
              
                     $("#addCart").click(function(){
                        $(".active-price").removeClass("active-price");
                       
                    });
                
                var index = 2;
                            $(".next").click(function(){
                        var idex = $(".white-item").attr("id","white-item"+(index++)+"");
                        if(index==14){ 
                            index=1;
                        }

                        console.log(idex);

                    });
                
                $(".prev").click(function(){
			var idex = $(".white-item").attr("id","white-item"+(index--)+"");
			if(index==0){
				index=13; 
			}
			
			console.log(idex);

		});
                
                
                
                
                     var slideCount = $("#product-slider ul li").length;
                    var slideWidth = $("#product-slider ul li").width();
                    var slideHeight = $("#product-slider ul li").height();
                    var sliderWidth = slideCount * slideWidth;
                
                    $("#product-slider").css({width:slideWidth,height:slideHeight});
            
                    $("#product-slider ul").css({width:sliderWidth,marginLeft: - slideWidth});
                
                       $("#product-slider ul li:last-child").prependTo("#product-slider ul");
               
                
                
                
           
            
             function moveLeft() {
        $('#product-slider ul').animate({
            left: + slideWidth
        }, 200, function () {
            $('#product-slider ul li:last-child').prependTo('#product-slider ul');
            $('#product-slider ul').css('left', '');
        });
                 var itemStart = 1;
		
                
    };

    function moveRight() {
        $('#product-slider ul').animate({
            left: - slideWidth
        }, 200, function () {
            $('#product-slider ul li:first-child').appendTo('#product-slider ul');
            $('#product-slider ul').css('left', '');
        });
        
       
    };
                   var slideCount2 = $("#product-slider2 ul li").length;
                    var slideWidth2 = $("#product-slider2 ul li").width();
                    var slideHeight2 = $("#product-slider2 ul li").height();
                    var sliderWidth2 = slideCount2 * slideWidth2;
                
                    $("#product-slider2").css({width:slideWidth2,height:slideHeight2});
            
                    $("#product-slider2 ul").css({width:sliderWidth2,marginLeft: - slideWidth2});
                     $("#product-slider2 ul li:last-child").prependTo("#product-slider2 ul");
                
            function moveLeft2() {
        $('#product-slider2 ul').animate({
            left: + slideWidth
        }, 200, function () {
            $('#product-slider2 ul li:last-child').prependTo('#product-slider2 ul');
            $('#product-slider2 ul').css('left', '');
        });
    };

    function moveRight2() {
        $('#product-slider2 ul').animate({
            left: - slideWidth
        }, 200, function () {
            $('#product-slider2 ul li:first-child').appendTo('#product-slider2 ul');
            $('#product-slider2 ul').css('left', '');
        });
    };
            
            
          
             $('#product-slider .prev').click(function () {
        moveLeft();
    });

    $('#product-slider .next').click(function () {
        moveRight();
    });
                 $('#product-slider2 .prev2').click(function () {
        moveLeft2();
    });

    $('#product-slider2 .next2').click(function () {
        moveRight2();
    });
                
                    var slideCount3 = $("#product-slider3 ul li").length;
                    var slideWidth3 = $("#product-slider3 ul li").width();
                    var slideHeight3 = $("#product-slider3 ul li").height();
                    var sliderWidth3 = slideCount3 * slideWidth3;
                
                    $("#product-slider3").css({width:slideWidth3,height:slideHeight3});
            
                    $("#product-slider3 ul").css({width:sliderWidth3,marginLeft: - slideWidth3});
                
                       $("#product-slider3 ul li:last-child").prependTo("#product-slider3 ul");
                
                function moveLeft3() {
        $('#product-slider3 ul').animate({
            left: + slideWidth
        }, 200, function () {
            $('#product-slider3 ul li:last-child').prependTo('#product-slider3 ul');
            $('#product-slider3 ul').css('left', '');
        });
    };

    function moveRight3() {
        $('#product-slider3 ul').animate({
            left: - slideWidth
        }, 200, function () {
            $('#product-slider3 ul li:first-child').appendTo('#product-slider3 ul');
            $('#product-slider3 ul').css('left', '');
        });
    };
                
                   $('#product-slider3 .prev3').click(function () {
        moveLeft3();
    });

    $('#product-slider3 .next3').click(function () {
        moveRight3();
    });
                

            });
        
