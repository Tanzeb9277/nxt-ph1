var maxPages = 102;
var arr = [];
var maxPages2 = 115;
var arr2 = [];
var nxt ;
var j = 1;
var k = 1;
var pre = 0;

window.onload = function() {
    for (var i = 2; i <= maxPages; i++) {
    
    if ( i < 10){
        nxt = ('000' + i).slice(-4);
        arr.push("Dark/"+nxt+".png")
    } else if ( i >= 10 && i < 100){
        nxt = ('00' + i).slice(-4);
        arr.push("Dark/"+nxt+".png")
    } else if ( i >= 100 ){
        nxt = ('0' + i).slice(-4);
        arr.push("Dark/"+nxt+".png")
    }
}
  //console.log(arr)
    for (var a = 42; a <= maxPages2; a++) {
    
    if ( a >= 10 && a < 100){
        nxt = ('00' + a).slice(-4);
        arr2.push("Final/"+nxt+".png")
    } else if ( i >= 100 ){
        nxt = ('0' + a).slice(-4);
        arr2.push("Final/"+nxt+".png")
    }
}
     console.log(arr2)
};





function trackScrollPosition() {
  const y = window.scrollY;
  const pos = y - 2110;
  const label = Math.min(Math.floor(y/7) + 1, 102);
  $("#phone").attr("src",arr[label]);
    console.log(y)
    if (y >= 932) {
        $(".text-container").css({top: '198px', position:'relative'})
        $(".text-container2").css({top: '298px', position:'relative'})
    }else{
        $(".text-container").css({top: '126px', position:'fixed'})
        $(".text-container2").css({top: '426px', position:'fixed'})
    }
    
    if (y > 150){
        $("#first-ln").css({opacity: "100"})
    }
     if (y > 300){
        $("#second-ln").css({opacity: "100"})
    }
     if (y > 450){
        $("#third-ln").css({opacity: "100"})
    }
     if (y > 600){
        $("#fourth-ln").css({opacity: "100"})
    }
    if (y > 4894 && y < 5700){
        $("#fifth-ln").css({opacity: "100"})
    }else{
        $("#fifth-ln").css({opacity: "0"})
    }
    
    
    if ( y > 2110 ){
        
        
        const label2 = Math.min(Math.floor(pos/40) + 1, 74);
        console.log(label2)
        $("#splash").attr("src",arr2[label2]);
           
            
    } 
}
$(document).ready(()=>{
  $(window).scroll(()=>{
    trackScrollPosition();
  })
})