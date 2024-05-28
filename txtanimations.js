let tl = gsap.timeline();

tl.from("#page1 #company-name span h1",{
    y:400,
    stagger:0.1
});


// tl.from("",{
//     y:100
// });

tl.from("#txt-wrapper.one #slogan div p ,#txt-wrapper.one  #txt  div p",{
    y:100,
    stagger:0.2,
    scrollTrigger:{
        
        scroller:"body",
        trigger:"#txt-wrapper.one #txt div",
        start:"top 85%",
        end:"top 35%",
        scrub:3
        

    }
    
});


tl.from("#txt-wrapper.two #slogan div p ,#txt-wrapper.two  #txt  div p",{
    y:100,
    stagger:0.2,
    scrollTrigger:{
    
        scroller:"body",
        trigger:"#txt-wrapper.two #txt div",
        start:"top 85%",
        end:"top 35%",
        scrub:3
        

    }
    
});


tl.from("#txt-wrapper.three #slogan div p ,#txt-wrapper.three  #txt  div p",{
    y:100,
    stagger:0.2,
    scrollTrigger:{
        
        scroller:"body",
        trigger:"#txt-wrapper.three #txt div",
        start:"top 85%",
        end:"top 35%",
        scrub:3
        

    }
    
});


tl.from("#page3 h1",{
    y:100, 
    stagger: 0.2,
    opacity: 0,
    
    scrollTrigger:{
        scroller:"body",
        trigger:"#page3",
       
        start:"top 100%",
        end:"top 30%",
        scrub:5
    }
})
