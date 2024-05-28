let playReel = document.querySelectorAll("#playreel");

let page1 = playReel[0].parentNode;
let page2 = playReel[1].parentNode;


console.log(page2)
// let handleMouseMove = (dets) =>{
//     playReel.style.left = dets.x +  "px";
//     playReel.style.top = dets.y +  "px";
// }

// page1.addEventListener("mousemove", handleMouseMove);
let handleMousemove = (dets) => { 
    // console.log(dets);
    gsap.to(playReel,{
        x:dets.x,
        y:dets.y,
        scale:1
    })
}


let handleMouseEnter = ()=>{
    gsap.to(playReel,{
        scale:1
    })
   
}

let handleMouseLeave = ()=>{
    gsap.to(playReel,{
        scale:0
    })
}


page1.addEventListener("mousemove" , handleMousemove);



page1.addEventListener("mouseenter" , handleMouseEnter);
page1.addEventListener("mouseleave" , handleMouseLeave);


page2.addEventListener("mousemove" , handleMousemove);



page2.addEventListener("mouseenter" , handleMouseEnter);
page2.addEventListener("mouseleave" , handleMouseLeave);