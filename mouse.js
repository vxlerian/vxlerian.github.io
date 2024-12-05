// var oldX = 0;
// var tilt = 0;
// (document).mousemove(function(e) {
//     tilt = e.pageX - oldX;
//     oldX = e.pageX;
//     $("#follow").css({
//     left: e.pageX + "px",
//     top: e.pageY + "px"
    
//     });
// });

addEventListener("mousemove", (event) => {
    // console.log(event)
    var follow = document.getElementById("follow")
    follow.style = `top:${event.pageY + 3}px; left:${event.pageX + 3}px;`; 
});

addEventListener("scroll", (event) => {
    console.log(event);
});

console.log("sup")