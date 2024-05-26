let tl = gsap.timeline();

tl.from("#page1 #company-name span h1",{
    y:400,
    stagger:0.1
});


tl.from("#txt-wrapper.one #slogan div p",{
    y:100
});

tl.from("#txt-wrapper.one  #txt  div p",{
    y:100,
    stagger:0.1,
    scrollTrigger:{
        markers:true,
        scroller:"#main",
        trigger:"#txt-wrapper.one  #txt",
        top:"top 100vh",
        end:"top 50vh",
    }
});


