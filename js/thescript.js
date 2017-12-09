/*$(document).ready(function(){
    alert("working!");
});*/
$(document).ready(function(){
    
  //navbar hamburger

    $("button.read-more").click(function(){
        $(".bio span").show();
        $(this).hide();
        $("button.read-less").show();
        
        
    });
    $("button.read-less").click(function(){
       $(".bio span").hide();
        $(this).hide();
         $("button.read-more").show();
        
        
    });
    
    
    $(".tour-organizer button").click(function(){
       var thisparent = $(this).parent();
        var tourName = $(thisparent).find("span.tour-name").text();
        var eventPlace = $(thisparent).find("span.event-place").text();
        var eventDate = $(thisparent).find("span.event-date").text();
        $("span#tour-name").text(tourName);
         $("span#event-place").text(eventPlace);
         $("span#event-date").text(eventDate);
    });
    
    
    
})
