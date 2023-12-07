gsap.from('.hero',{
    scale:1.2,
    duration:2.3
});
gsap.from('.navbar',{
    opacity:0, 
    delay:0.9   
});
gsap.from('.hero h1',{
    scale:2.6,
    delay:0.6,
    duration:.4
});
gsap.from('.hero .hero-para',{
    y:10,
    opacity:0,
    delay:1,
    duration:.9
});
gsap.from('.btn-grp',{
    y:10,
    opacity:0,
    delay:1.4,
    duration:.9
});
gsap.from('.card-container .card',{
    x: -30,
    opacity:0,
    stagger:0.4,
    duration:2.4,
    scrollTrigger:{
        trigger:".hero-para",
        scroller:"body",
        start:"top 10%",
        scrub:3,
   }
});
gsap.from('.page2 h1',{
    scale:2.3,
    duration:.5,
    scrollTrigger:{
        trigger:".card-container",
        scroller:"body",
        start:"top 3%"
    }
});
gsap.from('.page2 p,.btn-grp2',{
    opacity:1,
    duration:.4,
    scrollTrigger:{
        trigger:".card-container",
        scroller:"body",
        start:"top 30%"
    }
});