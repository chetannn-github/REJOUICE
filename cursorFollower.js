let playReel = document.querySelector("#playreel");
let page1 = document.querySelector("#page1");

// let handleMouseMove = (dets) =>{
//     playReel.style.left = dets.x +  "px";
//     playReel.style.top = dets.y +  "px";
// }

// page1.addEventListener("mousemove", handleMouseMove);
let handleMousemove = (dets) => {
    console.log(dets);
    gsap.to(playReel,{
        x:dets.pageX,
        y:dets.pageY,
        scale:1
    })
}

page1.addEventListener("mousemove" , handleMousemove);



page1.addEventListener("mouseenter" , ()=>{
    gsap.to(playReel,{
        scale:1
    })
});
page1.addEventListener("mouseleave" , ()=>{
    gsap.to(playReel,{
        scale:0
    })
});