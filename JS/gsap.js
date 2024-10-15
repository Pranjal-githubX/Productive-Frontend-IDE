let tl = gsap.timeline()
tl.to("body", {
    display: "block",
    delay: 0.1
})
tl.from("body", {
    opacity: 0,
    delay: 1
}, "s")
tl.to("body", {
    background: "black",
    duration: 1.5,
}, "s")

tl.from(".file", {
    opacity: 0,
    duration: 0.8,
    stagger: 0.1,
    // delay: 0.3
}, "a")
tl.from(".bottom *", {
    opacity: 0,
    // duration: 0.8,
    stagger: 0.1,
}, "a")
tl.to(".run", {
    opacity: 1,
}, "a")

tl.to(".workspace", {
    opacity: 1,
    duration: 1,
}, "a")
tl.from("#handleIcon", {
    opacity: 0,
    duration: 1.3,
}, "a")
tl.from(".newDiv", {
    opacity: 0,
    duration: .3,
    delay: 0.6,
    stagger: 0.4
}, "a")
