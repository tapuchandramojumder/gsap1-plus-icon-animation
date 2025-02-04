const lenis = new Lenis()

lenis.on("scroll",ScrollTrigger.update);

gsap.ticker.add((time)=>{
    lenis.raf(time*1000)
})

gsap.ticker.lagSmoothing(0)

gsap.registerPlugin(ScrollTrigger)

// Pinning `.pinned` section with scroll animation
ScrollTrigger.create({
    trigger: ".pinned",
    start: "top top",
    endTrigger: ".website-content",
    end: "bottom top",
    markers: true,
    pin: true,
    scrub: 1,
    pinSpacing:false
})


// Pinning `.header-info` for smooth scroll effect
ScrollTrigger.create({
    trigger: ".header-info",
    start: "top top",
    endTrigger:".website-content",
    end: "bottom bottom",
    markers: true,
    pin: true,
    pinSpacing:true,
    scrub: 1
})


// Rotating and scaling the `.revealer` element on scroll
ScrollTrigger.create({
    trigger:".pinned",
    start:"top top",
    endTrigger:".header-info",
    end: "bottom bottom",
    markers: true,
    scrub: 1,
    ease:"elastic",
    onUpdate: (self)=>{
        const rotation = self.progress*360;
        gsap.to(".revealer",{rotation})
        const scale = 1 + self.progress*0.2;
        gsap.to(".revealer",{scale})
        const opacity = 1 - self.progress*.5;
        gsap.to(".revealer",{opacity})
    }

})

// Moves `.revealer` horizontally on scroll
ScrollTrigger.create({
    trigger:".header-info",
    start:"top top",
    end: "bottom bottom",
    markers: true,
    scrub:1,
    ease:"elastic",
     onUpdate:(self)=>{
        const progress = self.progress;
        const left = 35+25*progress;
        gsap.to(".revealer",{
            left:`${left}%`,
           
            
        })
    },
   
})
