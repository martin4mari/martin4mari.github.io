var burgerMenu = document.getElementById("menu-button");
var show = document.getElementById("navBar");

burgerMenu.addEventListener("click", function () {
  this.classList.toggle("close");
  show.classList.toggle("show");
});

const tl = gsap.timeline();

tl.from("#h1", { x: "-500", ease: "easeInOut", duration: 1.5 });
tl.from(".p-header", {
  x: "-500",
  ease: "easeInOut",
  duration: 1,
  delay: -0.5,
});
tl.from(".socials-header", {
  x: "-500",
  ease: "easeInOut",
  duration: 1,
  delay: -0.5,
});
tl.from("#navBar", { x: "500", ease: "easeInOut", duration: 1.5, delay: -0.5 });

gsap.fromTo(
  ".span",
  { color: "black" },
  { color: "white", repeat: -1, duration: 1 }
);

gsap.registerPlugin(ScrollTrigger);

// const tl2 = gsap.timeline({ scrollTrigger: { trigger: ".h2-projects",
// scrub:true } });

gsap.from(".h2-projects", {
  y: 200,
  duration: 1,
  scrollTrigger: ".h2-projects",
});
gsap.from(".projects", {
  y: 200,
  duration: 1,
  scrollTrigger: ".projects",
});
gsap.from("#projects", {
  y: 200,
  duration: 1,
  scrollTrigger: "#projects",
});

gsap.from(".h2-services", {
  y: 200,
  duration: 1,
  scrollTrigger: ".h2-services",
});
gsap.from("#service_card", {
  y: 200,
  duration: 1,
  scrollTrigger: "#service_card",
});
gsap.from("#services", {
  y: 200,
  duration: 1,
  scrollTrigger: "#services",
});

gsap.from(".h3-about", {
  y: 200,
  duration: 0.5,
  scrollTrigger: ".h3-about",
});
gsap.from(".img-container", {
  x: -700,
  duration: 1,
  scrollTrigger: ".img-container",
});
gsap.from(".about-p", {
  x: 700,
  duration: 1,
  scrollTrigger: ".about-p",
});

gsap.from(".h3-contact", {
  y: 100,
  duration: 1,
  scrollTrigger: ".h3-contact",
});
gsap.from(".contact-list", {
  y: 100,
  duration: 1,
  scrollTrigger: ".contact-list",
});
gsap.from("#contact", {
  y: 100,
  duration: 0.5,
  scrollTrigger: "#contact",
});
